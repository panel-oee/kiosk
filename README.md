# Terminal 6S - GitHub Pages / PWA

To jest gotowa paczka statycznej aplikacji webowej do wrzucenia na GitHub Pages. Nie wymaga Android Studio.

## Pliki startowe

- `index.html` - główny ekran aplikacji, oparty na `kiosk_6S.html`.
- `panel.html` - alias do ekranu głównego, żeby adres mógł wyglądać podobnie do `.../app/panel.html`.
- `kiosk_6S.html` - kopia ekranu głównego dla zgodności z linkami.
- `statystyki_6S.html` - ekran statystyk.
- `manifest.webmanifest` - konfiguracja instalacji na telefonie.
- `sw.js` - service worker do trybu PWA i cache podstawowych plików.
- `icons/` - ikony aplikacji.

## Jak wrzucić na GitHub Pages

### Opcja A: repozytorium jako strona główna

1. Utwórz repozytorium, np. `terminal-6s`.
2. Wrzuć wszystkie pliki z tej paczki do głównego katalogu repozytorium.
3. Wejdź w `Settings > Pages`.
4. Wybierz `Deploy from a branch`.
5. Branch: `main`, folder: `/root`.
6. Po chwili aplikacja będzie dostępna pod adresem podobnym do:

```text
https://TWOJ_LOGIN.github.io/terminal-6s/
```

### Opcja B: adres podobny do `/app/panel.html`

Jeżeli chcesz adres jak:

```text
https://TWOJ_LOGIN.github.io/app/panel.html
```

utwórz repozytorium `app` i wrzuć pliki do głównego katalogu. Otwieraj wtedy `panel.html`.

## Instalacja na telefonie

### Android / Chrome

1. Otwórz adres aplikacji w Chrome.
2. Menu z trzema kropkami.
3. Wybierz `Dodaj do ekranu głównego` albo `Zainstaluj aplikację`.

### iPhone / Safari

1. Otwórz adres aplikacji w Safari.
2. Kliknij ikonę udostępniania.
3. Wybierz `Do ekranu początkowego`.

## Ważne

Aplikacja nadal potrzebuje internetu do Supabase i biblioteki Supabase z CDN. PWA zapisuje podstawowe pliki aplikacji w pamięci, ale dane produkcyjne pobiera z bazy.
