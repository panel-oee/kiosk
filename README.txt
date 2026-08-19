Terminal 6S v1.5.1 / build 16

Wersja testowa mechanizmu aktualizacji z v1.5.0 build 15 do v1.5.1 build 16.

Po publikacji wszystkich plików aplikacja w wersji 1.5.0 powinna pokazać:
- Dostępna wersja 1.5.1
- Obecna: 1.5.0 / build 15
- Nowa: build 16

Po kliknięciu Zaktualizuj teraz przycisk przejdzie przez etapy Pobieranie, Instalowanie i Uruchamianie. Po controllerchange aplikacja otworzy index.html z parametrem build=16. Po uruchomieniu v1.5.1 baner musi zniknąć, ponieważ APP_BUILD i version.json mają wartość 16.

Wgraj jednocześnie wszystkie pliki, szczególnie index.html, sw.js i version.json.
