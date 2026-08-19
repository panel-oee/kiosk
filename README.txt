Terminal 6S v1.5.0 / build 15

Naprawiony mechanizm aktualizacji:
- porównuje liczbowy numer build, a nie sam tekst wersji,
- version.json zawsze pobierany jest bez cache,
- baner jest widoczny tylko, gdy opublikowany build jest wyższy od APP_BUILD,
- przycisk pobiera i instaluje oczekujący Service Worker,
- przeładowanie następuje dopiero po controllerchange,
- aktualizacja jest blokowana podczas sesji, otwartego zgłoszenia lub przy wpisach offline,
- gdy wersja jest aktualna, baner pozostaje ukryty.

Aby opublikować kolejną wersję, zwiększ jednocześnie:
1. APP_VERSION i APP_BUILD w index.html,
2. APP_VERSION, APP_BUILD i VERSION w sw.js,
3. version, build i cache w version.json.

Wgraj wszystkie pliki na GitHub Pages, zachowując folder icons.
