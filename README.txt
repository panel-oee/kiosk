Terminal 6S v1.4.2

Nowości:
- prawidłowe cofanie zapisów offline,
- rozróżnienie wpisów oczekujących i błędów synchronizacji,
- panel kolejki z ponawianiem pojedynczych wpisów,
- trwały identyfikator urządzenia,
- ekran diagnostyczny administratora,
- kontrolowana aktualizacja bez przeładowania trwającej sesji,
- filtry analityczne operatora, zmiany, statusu i zakresu,
- ranking przyczyn problemów i zadań problemowych,
- dwa wskaźniki: terminowość i obsłużenie obowiązków,
- trend wyników w miesiącu.

Uwaga: pełny obieg problemów, zdjęcia i Supabase Auth wymagają zmian w schemacie bazy i zasadach RLS. Ta paczka nie zmienia bazy i pozostaje zgodna z obecną tabelą sixs_task_logs.

Wgraj wszystkie pliki na GitHub Pages, zachowując folder icons.

Poprawka 1.4.1: komunikat aktualizacji jest pokazywany tylko wtedy, gdy version.json zawiera nowszą wersję. Przycisk pokazuje stan aktualizacji i usuwa fałszywy komunikat, gdy aplikacja jest aktualna.

Poprawka 1.4.2: aktualizacja jest pokazywana wyłącznie, gdy opublikowany numer jest większy od uruchomionego. version.json omija cache Service Workera.
