# Historia zmian Terminal 6S

Dokument opisuje rozwój aplikacji Terminal 6S przygotowanej jako instalowalna aplikacja internetowa PWA publikowana przez GitHub Pages.

Format dokumentu jest oparty na konwencji Keep a Changelog. Numery wersji odzwierciedlają kolejne paczki przygotowane podczas rozwoju aplikacji.

---

## [1.6.0] - build 17

### Dodano

#### Pulpit operatora

- Uproszczony pulpit przypisanego operatora.
- Automatyczne wyświetlanie przypisanego operatora.
- Informację o najbliższej sesji 6S, zmianie i godzinie rozpoczęcia.
- Aktualizowany co sekundę licznik czasu do rozpoczęcia sesji.
- Informację o czasie, który upłynął od planowanego rozpoczęcia.
- Informację o standardowym oknie startu: 15 minut przed oraz 30 minut po planowanej godzinie.

#### Pomiar i podsumowanie sesji

- Automatyczny pomiar czasu po rozpoczęciu sesji.
- Widoczny licznik czasu bieżącej sesji.
- Zachowanie czasu rozpoczęcia w pamięci lokalnej.
- Przywracanie czasu po ponownym otwarciu aplikacji.
- Ekran podsumowania zawierający liczbę wykonanych zadań, problemów, wpisów offline oraz czas realizacji.

#### Praca offline

- Lokalną kopię listy operatorów.
- Lokalną kopię harmonogramu przerw.
- Lokalną kopię ostatniej konfiguracji zadań i sesji.
- Awaryjne wczytanie operatorów z pamięci lokalnej, gdy Supabase jest niedostępny.
- Wskaźnik gotowości podstawowej konfiguracji offline.

#### Ochrona danych

- Podstawowe wykrywanie nowszego, odmiennego statusu w Supabase.
- Ostrzeżenie przed nadpisaniem nowszego wpisu.
- Możliwość anulowania zapisu w przypadku konfliktu.

#### Automatyczna walidacja repozytorium

- Workflow `.github/workflows/validate.yml`.
- Skrypt `scripts/validate.mjs` sprawdzający wymagane pliki, wersję, build, cache, manifest, ikony oraz ryzyko uszkodzenia eksportu statystyk.

### Zmieniono

- Zwiększono wersję z `1.5.1` do `1.6.0`.
- Zwiększono build z `16` do `17`.
- Zmieniono cache na `terminal-6s-1.6.0-v17`.
- Zachowano kontrolowany mechanizm aktualizacji oparty na numerze buildu.

### Zweryfikowano

- Zgodność wersji, buildu i cache w `index.html`, `sw.js` oraz `version.json`.
- Składnię JavaScript w plikach aplikacji.
- Poprawność manifestu, ikon oraz archiwum ZIP.
- Pomyślne wykonanie lokalnego skryptu walidacyjnego.

---

## [1.5.1] - build 16

### Zmieniono

- Zwiększono numer wersji aplikacji z `1.5.0` do `1.5.1`.
- Zwiększono numer kompilacji z `15` do `16`.
- Zmieniono wersję pamięci aplikacji na `terminal-6s-1.5.1-v16`.
- Zaktualizowano zgodnie trzy źródła informacji o wersji:
  - `APP_VERSION` i `APP_BUILD` w `index.html`,
  - `APP_VERSION`, `APP_BUILD` i `VERSION` w `sw.js`,
  - `version`, `build` i `cache` w `version.json`.

### Zweryfikowano

- Potwierdzono prawidłowe wykrycie aktualizacji z wersji `1.5.0 / build 15` do `1.5.1 / build 16`.
- Potwierdzono przejście przycisku aktualizacji przez etapy:
  - `Pobieranie...`,
  - `Instalowanie...`,
  - `Uruchamianie...`.
- Potwierdzono przeładowanie aplikacji po zdarzeniu `controllerchange`.
- Potwierdzono zniknięcie komunikatu aktualizacji po uruchomieniu wersji `1.5.1`.
- Sprawdzono składnię JavaScript w `index.html`, `statystyki_6S.html` i `sw.js`.

---

## [1.5.0] - build 15

### Dodano

- Nowy mechanizm aktualizacji oparty na liczbowym numerze kompilacji `build`.
- Plik `version.json` zawierający:
  - numer wersji,
  - numer kompilacji,
  - nazwę pamięci cache,
  - datę publikacji.
- Baner aktualizacji pokazujący wersję bieżącą i dostępną.
- Kontrolowane etapy aktualizacji widoczne na przycisku.
- Oczekiwanie na instalację nowego Service Workera.
- Wysyłanie komunikatu `SKIP_WAITING` wyłącznie do oczekującego Service Workera.
- Oczekiwanie na zdarzenie `controllerchange` przed przeładowaniem aplikacji.
- Obsługę komunikatu `GET_VERSION` w Service Workerze.

### Zabezpieczenia

- Aktualizacja jest blokowana, gdy:
  - trwa sesja 6S,
  - otwarte jest zgłoszenie problemu,
  - istnieją wpisy oczekujące na synchronizację,
  - inna aktualizacja jest już w toku.
- Baner jest pokazywany tylko wtedy, gdy opublikowany `build` jest większy od lokalnego `APP_BUILD`.
- `version.json` jest pobierany z pominięciem pamięci podręcznej.

### Naprawiono

- Fałszywe wykrywanie aktualizacji na podstawie samego stanu `waiting` Service Workera.
- Powracający komunikat aktualizacji dla tej samej wersji aplikacji.
- Niejednoznaczne porównywanie tekstowych numerów wersji.

---

## [1.4.3]

### Zmieniono

- Tymczasowo usunięto baner i ręczny przycisk aktualizacji, aby ustabilizować działanie aplikacji.
- Przywrócono automatyczną aktywację nowego Service Workera po publikacji i ponownym uruchomieniu aplikacji.
- Zmieniono pamięć cache na `terminal-6s-1.4.3-v13`.

### Naprawiono

- Usunięto stale widoczny przycisk aktualizacji, który pojawiał się mimo zgodności wersji aplikacji i `version.json`.

---

## [1.4.2]

### Dodano

- Liczbowe porównywanie segmentów numeru wersji.
- Pobieranie `version.json` z parametrem zapobiegającym użyciu starej kopii.
- Regułę Service Workera omijającą cache dla `version.json`.

### Naprawiono

- Wyświetlanie aktualizacji, gdy opublikowany numer wersji był równy lub starszy od wersji lokalnej.
- Używanie starego `version.json` z pamięci Service Workera.

---

## [1.4.1]

### Dodano

- Pierwszą wersję pliku `version.json`.
- Porównanie numeru uruchomionej aplikacji z numerem opublikowanym na GitHub Pages.
- Informację o wersji bieżącej i docelowej w komunikacie aktualizacji.

### Naprawiono

- Fałszywy komunikat aktualizacji wynikający z wykrycia oczekującego Service Workera mimo uruchomienia aktualnego interfejsu.

---

## [1.4.0]

### Dodano

#### Synchronizacja i tryb offline

- Panel kolejki synchronizacji.
- Rozróżnienie wpisów oczekujących i wpisów z błędem synchronizacji.
- Licznik prób synchronizacji.
- Podgląd komunikatu błędu Supabase.
- Ponawianie pojedynczego wpisu.
- Możliwość usunięcia problematycznego wpisu przez administratora.
- Poprawione cofanie wpisów zapisanych lokalnie.
- Zapisywanie daty ostatniej poprawnej synchronizacji.

#### Identyfikacja urządzenia

- Trwały, losowy identyfikator urządzenia w formacie zbliżonym do `6S-4F8A92C1`.
- Zapisywanie identyfikatora urządzenia przy nowych wpisach 6S.

#### Diagnostyka

- Ekran diagnostyczny administratora zawierający:
  - wersję aplikacji,
  - identyfikator urządzenia,
  - stan połączenia,
  - przypisanego operatora,
  - liczbę wpisów w kolejce,
  - czas ostatniej synchronizacji,
  - stan Service Workera,
  - nazwę cache,
  - stan lokalnego harmonogramu,
  - informacje o przeglądarce.
- Test połączenia z Supabase.
- Kopiowanie informacji diagnostycznych.

#### Statystyki

- Filtry analityczne według:
  - operatora,
  - zmiany,
  - statusu,
  - zakresu czasu.
- Wskaźnik terminowości.
- Wskaźnik obsłużenia obowiązków, uwzględniający wykonania i prawidłowo zgłoszone problemy.
- Licznik wpisów problemowych.
- Trend względem wcześniejszej części miesiąca.
- Ranking najczęstszych przyczyn problemów.
- Ranking zadań z największą liczbą problemów.

### Zmieniono

- Rozbudowano panel administratora o diagnostykę i kolejkę synchronizacji.
- Dodano pierwszą wersję kontrolowanej aktualizacji aplikacji.

---

## [1.3.1]

### Naprawiono

- Krytyczny błąd w `statystyki_6S.html`, przez który kod JavaScript był wyświetlany na stronie jako zwykły tekst.
- Nieprawidłowe wstawienie rejestracji Service Workera do tekstu generowanego przez funkcję eksportu Excel.
- Składnię funkcji eksportu kalendarza do pliku `.xls`.
- Umiejscowienie skryptu rejestrującego Service Workera.

### Zweryfikowano

- Składnię wszystkich skryptów w pliku statystyk.
- Poprawność działania eksportu Excel.
- Poprawność archiwum publikacyjnego.

---

## [1.3.0]

### Dodano

- Automatyczny wybór najbliższej przerwy 6S.
- Ostrzeżenie o pracy na dacie innej niż bieżąca.
- Dodatkowe potwierdzenie zapisu dla daty historycznej.
- Listę wszystkich zadań bieżącej sesji.
- Bezpośrednie przechodzenie do wybranego zadania.
- Statusy zadań na liście:
  - `Do wykonania`,
  - `Wykonane`,
  - `Problem`,
  - `Zapis lokalny`.
- Ręczny przycisk `Synchronizuj teraz`.
- Ostrzeżenie przed zakończeniem sesji z niesynchronizowanymi wpisami.
- Automatyczne zamknięcie sesji po 10 minutach bezczynności.
- Tryb administratora uruchamiany przez przytrzymanie logo 6S przez 5 sekund.
- Możliwość zmiany przypisanego operatora przez administratora bez czyszczenia danych aplikacji.

### Zabezpieczenia

- Tryb administratora wymaga kodu PIN.
- Zmiana operatora jest blokowana, gdy istnieją niesynchronizowane wpisy.

---

## [1.2.0]

### Dodano

- Trwałe przypisanie operatora do urządzenia.
- Ekran pierwszego przypisania operatora.
- Potwierdzenie wyboru operatora.
- Zapis przypisania w lokalnej pamięci aplikacji.

### Zmieniono

- Po przypisaniu lista operatorów zostaje zablokowana.
- Przycisk zmiany operatora zostaje ukryty.
- Historia miesięczna jest ograniczona do przypisanego operatora.
- Rozpoczęcie sesji jest możliwe wyłącznie dla operatora przypisanego do urządzenia.

### Ograniczenia

- W pierwotnym wariancie zmiana operatora wymagała wyczyszczenia danych aplikacji lub danych witryny.

---

## [1.1.0]

### Dodano

- Kolejkę zapisów offline w `localStorage`.
- Automatyczną synchronizację po odzyskaniu internetu.
- Licznik wpisów oczekujących.
- Status synchronizacji na ekranie głównym.
- Komunikat o lokalnym zapisaniu zadania.
- Blokadę przycisków podczas zapisu.
- Ochronę przed wielokrotnym kliknięciem.
- Numer wersji widoczny w aplikacji.

### Zmieniono

- Zadanie wykonane bez internetu jest zachowywane lokalnie i wysyłane po powrocie połączenia.
- Błędy sieci nie powodują utraty lokalnego potwierdzenia operatora.

---

## [1.0.0]

### Dodano

- Pierwszą wersję aplikacji Terminal 6S publikowaną przez GitHub Pages.
- `index.html` jako główny ekran aplikacji oparty na `kiosk_6S.html`.
- `statystyki_6S.html` jako ekran statystyk i kalendarza realizacji.
- Nawigację między terminalem i statystykami.
- Połączenie z Supabase.
- Wybór operatora.
- Automatyczne dopasowanie zmiany i przerwy 6S.
- Pobieranie zadań przypisanych do grupy operatora.
- Statusy `Wykonane` i `Problem`.
- Historię miesięczną operatora.
- Eksport statystyk do Excela.
- Drukowanie i zapis statystyk do PDF przez przeglądarkę.

### PWA

- Manifest aplikacji.
- Ikony 192 × 192 i 512 × 512.
- Service Worker.
- Możliwość instalacji na ekranie telefonu.
- Uruchamianie w trybie `standalone`.
- Ukrywanie przycisku instalacji po uruchomieniu zainstalowanej aplikacji.
- Podstawową pamięć offline plików aplikacji.

---

## Informacje techniczne

### Główne pliki

- `index.html` – terminal operatora i logika PWA.
- `statystyki_6S.html` – kalendarz, historia i statystyki.
- `sw.js` – Service Worker, cache i cykl aktualizacji.
- `version.json` – publiczna informacja o wersji i numerze kompilacji.
- `manifest.webmanifest` – konfiguracja instalowalnej aplikacji.
- `icons/icon-192.png` – ikona aplikacji 192 × 192.
- `icons/icon-512.png` – ikona aplikacji 512 × 512.

### Zasada publikowania kolejnej wersji

Przy każdej kolejnej aktualizacji należy zwiększyć jednocześnie:

1. `APP_VERSION` i `APP_BUILD` w `index.html`.
2. `APP_VERSION`, `APP_BUILD` oraz `VERSION` w `sw.js`.
3. `version`, `build` i `cache` w `version.json`.

Przykład kolejnej wersji:

```text
APP_VERSION: 1.5.2
APP_BUILD: 17
CACHE: terminal-6s-1.5.2-v17
```

### Ważne ograniczenia

- Operacje zapisu do Supabase wymagają internetu albo późniejszej synchronizacji lokalnej kolejki.
- Usunięcie danych aplikacji usuwa przypisanie operatora oraz lokalną kolejkę offline.
- Kod PIN zapisany w pliku HTML chroni przed przypadkową zmianą, ale nie jest zabezpieczeniem kryptograficznym.
- Pełna obsługa zdjęć problemów, przepływu rozwiązywania problemów i Supabase Auth wymaga rozszerzenia schematu bazy oraz reguł RLS.
