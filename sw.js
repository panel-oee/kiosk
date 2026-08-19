const VERSION = 'terminal-6s-1.4.0-v10';
const APP_CACHE = VERSION + '-app';
const DATA_CACHE = VERSION + '-data';

const APP_FILES = [
  './',
  './index.html',
  './statystyki_6S.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('message', event => { if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting(); });

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(APP_CACHE).then(cache => cache.addAll(APP_FILES))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => ![APP_CACHE, DATA_CACHE].includes(key)).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

function isAppFile(request) {
  const url = new URL(request.url);
  return url.origin === self.location.origin;
}

async function appShell(request) {
  const cached = await caches.match(request);
  if (cached) {
    fetch(request).then(response => {
      if (response && response.ok) {
        caches.open(APP_CACHE).then(cache => cache.put(request, response));
      }
    }).catch(() => {});
    return cached;
  }

  try {
    const response = await fetch(request);
    if (response && response.ok) {
      const cache = await caches.open(APP_CACHE);
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    if (request.mode === 'navigate') {
      return caches.match('./index.html');
    }
    throw error;
  }
}

async function networkWithDataFallback(request) {
  const cache = await caches.open(DATA_CACHE);
  try {
    const response = await fetch(request);
    if (response && (response.ok || response.type === 'opaque')) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) return cached;
    throw error;
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;

  if (isAppFile(request)) {
    event.respondWith(appShell(request));
  } else {
    event.respondWith(networkWithDataFallback(request));
  }
});
