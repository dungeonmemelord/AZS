# TODOs Migration

## TODOs

- [ ] Zauktualizuj skrypty
  - [ ] Opisz jak uruchamiać dev

## Algorytm

### Notka 1

1. Hook -> ready
2. get current version -> settings
3. storeInitialWorldVersion() || storeInitialSystemVersion()
4. Czy jest jeden GM?
   1. Czy jest migracja konieczna?
   2. Jeśli jest więcej niż 1 GM -> ALERT! -> "Trzeba zrobić migrację. Może zrobić to tylko jeden GM." -> Czyli jednemu z GM się pojawia możliwość zrobienia migracji, a pozostałym pojawi się komunikat, ale nie mogą tego zrobić, bo już u innego GM się migracja dokonuje.

### Notka 2 - Algorytm sprawdzania czy potrzebna jest migracja

- sprawdź czy jest GM
- currentVersion
  -> 1.0.9 - SemVer od tego taga
  -> 1.00 -> 1.08
- doeasNeedMigration()
  -> migrations.migrateWorld()

## Inspiracje

### Pathfinder 2e

- url -> https://github.com/foundryvtt/pf2e
- https://github.com/search?q=repo%3Afoundryvtt%2Fpf2e%20migration&type=code -https://github.com/search?q=repo%3Afoundryvtt%2Fpf2e%20migrat&type=code

#### Algorytm

1. Ready Hook -> Hooks.once("ready" => hookHandler)
2. Pobieranie currentVersion świata
   -> Nie mam pojęcia czym jest wersja świata
3. Zapisywanie World Version
   -> path -> src/scripts/store-versions.ts

   1. sprawdzenie czy aktywny User ma rolę GM -> ucieczka jak nie
   2. Zapisanie w game.settings game.system.version jako worldSystemVersion

      ```ts
      const storedSystemVersion = game.settings.storage
        .get('world')
        .getItem('pf2e.worldSystemVersion');
      if (!storedSystemVersion) {
        await game.settings.set(
          'pf2e',
          'worldSystemVersion',
          game.system.version
        );
      }
      ```

   3. Zapisywanie w game.settings worldSchemaVersion

4. Migracja nie może być przeprowadzona na wielu aktywnych Klientach. Jest możliwe, że będzie zalogowanych więcej niż jeden GM. Dlatego migracja poninna być uruchomiona tylko na jednym z Klientów GM. W tym kroku PF się upewnia czy migracja jest uruchamiana dla jednego Aktywnego GM.

5. Następuje migracja, o ile jestpotrzebna.

6. Po migracji powiadomienie, że system jest gotowy do użycia.

```ts
Hooks.callAll('pf2e.systemReady');
```

### DnD

- https://github.com/search?q=repo%3Afoundryvtt%2Fdnd5e%20migrat&type=code
- https://github.com/search?q=repo%3Afoundryvtt%2Fdnd5e%20perform%20the%20migration&type=code

### YT

- https://youtu.be/Hl23n3MvtaI

## Refactoring

1. [x] Rozbij utlis.js na mniejsze byty

## Testowanie

1. Przetestuj na wersji
   1. v11
   2. v10 -> ma mniejszy priorytet
