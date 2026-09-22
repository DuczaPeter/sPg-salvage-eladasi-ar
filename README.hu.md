# sPg Salvage Eladási Ár

![Projekt borító](docs/images/social-preview.png)

## Mire való?

Az **sPg Salvage Eladási Ár** egy böngészőben futó, egyetlen HTML-fájlból álló Star Citizen segéd. A célja nem az, hogy minden Salvage-mechanikát egy helyre zsúfoljon, hanem hogy a két pénzügyileg fontos útvonalat gyorsan és ellenőrizhetően kezelje:

- **Structural salvage → CMAT:** a kiválasztott salvage hajóból automatikusan meghatározza a nyers structural anyagot, alkalmazza a hozzá tartozó recovery modellt, összeveti a finomítókat és az eladási helyeket.
- **RMC eladás:** rendszerenként rangsorolja az aktuális eladási helyeket.
- **Demand:** a demandot nem másolja be külön adatmodellként. A fő CMAT/RMC címek és a találati helyek közvetlenül a megfelelő UEX demand oldalra visznek.

## Legfontosabb funkciók

- HU / EN felület.
- Kötelező salvage-hajó választás; nincs felhasználói „összes hajó” számolási útvonal.
- Hajó → structural material resolver:
  - RSI Salvation → Construction Rubble
  - Drake Vulture → Construction Rubble
  - MISC Fortune → Construction Rubble
  - ARGO MOTH → Construction Pieces
  - Aegis Reclaimer → Construction Salvage
- Elfogadott, provenance-kötött közösségi recovery alapértékek, ha nincs használható aktuális direkt audit:
  - Rubble: 40%
  - Pieces: 20%
  - Salvage: 15,2%
- Anyagonként izolált refinery bonus:
  - Rubble: Levski +9% (ahol a forrás ezt igazolja)
  - Pieces: nincs külön explicit bonus
  - Salvage: Levski +8%
- Dinyx / Pyrometric választás. Method-specifikus recovery eltérést csak direkt, aktuális audit bizonyíthat.
- Finomítás + Eladás / Csak Eladás mód.
- Top 3 / Minden találat nézet.
- Felszín / Űr helyszínszűrés.
- Hajóméret és hely-hozzáférés külön kezelése.
- XL hajónál csak igazolt **XL hangár + docking** együtt elfogadható.
- UEX LIVE rendszerek automatikus felfedezése.
- SCMDB `latest.json` alapú buildkövetés.
- SC Wiki célzott fallback lekérdezések, teljes location-adatbázis tükrözése nélkül.
- IndexedDB-only runtime persistence; a localStorage csak legacy takarítás/diagnosztika.
- Nagy upstream adatbázisok helyett kis **Salvage Operational Snapshot** kerül cache-be.
- Diagnosztikai log és beépített regressziós feature gate-ek.

![Architektúra](docs/images/architecture.png)

## Használat

1. Nyisd meg az `index.html` fájlt vagy a GitHub Pages kiadást.
2. Várd meg az aktuális forrásadatok betöltését.
3. Válaszd ki a salvage hajót.
4. CMAT-hoz add meg a finomítás előtti nyers SCU-t. RMC-hez az SCU opcionális, de teljes bevételhez szükséges.
5. Válassz módot, refining methodot, helyszínszűrőt és Top 3 / Minden találat nézetet.
6. Kattints a **Construction Materia CMAT** vagy **Recycled Material Composite RMC** címre az általános UEX demand oldalhoz.
7. Kattints egy találati hely nevére a commodity + konkrét terminal UEX demand nézethez.

![Felhasználói folyamat](docs/images/workflow.png)

## Adatforrások és bizalmi modell

**Elsődleges / direkt aktuális adatok:** UEX API 2.0. Ár, terminál, LIVE rendszer, jármű `pad_type`, hely `pad_types` és más aktuális működési adatok itt kapnak elsőbbséget.

**Keresztellenőrzés / refinery adat:** SCMDB_DATA. A program a `latest.json` alapján követi az aktuális buildhez tartozó mining fájlt.

**Célzott fallback / másodlagos ellenőrzés:** Star Citizen Wiki API. Nem tölti le a teljes locations adatbázist; csak releváns facilityket kérdez le, amikor erre ténylegesen szükség van.

**Recovery:** ha nincs használható aktuális direkt audit, az alkalmazás a dokumentált `COMMUNITY_MEASURED` modellt használja, és ezt nem tünteti fel hivatalos CIG értékként.

Részletesen: [docs/DATA-SOURCES.hu.md](docs/DATA-SOURCES.hu.md)

## Automatikus patchkövetés

A kód nem 4.10.1-re van „befagyasztva”. A rendszer runtime fedezi fel a LIVE rendszereket, az SCMDB aktuális buildet és a SC Wiki alapértelmezett verzióját. Új árak, terminálok, refineryk és LIVE rendszerek normál adatváltozás esetén kódmódosítás nélkül be tudnak kerülni.

Ha viszont egy patch teljesen új Salvage-mechanikát, új structural anyagot vagy bizonyítatlan hajó→anyag kapcsolatot hoz, az alkalmazásnak **UNKNOWN/FAIL** állapotot kell jeleznie, nem pedig kitalálnia az új szabályt.

## Diagnosztika

A V054 felhasználói runtime logja szerint:

- 144/144 coverage check lefutott.
- 120 PASS.
- 24 szabályos EMPTY.
- 0 ERROR.
- 42 feature check.
- `featureFailures: []`.
- storage architecture PASS.
- adaptive slim pipeline PASS.
- UEX deep links PASS.

Az `ATTENTION` státusz jelenleg olyan helyeknél marad meg, ahol a hangár/pad hozzáférés forrásból nem bizonyítható. Ez szándékos fail-safe viselkedés.

![Validáció](docs/images/validation-status.png)

## Single-file szabály

A felhasználói kiadás továbbra is **egyetlen önálló HTML fájl**. A GitHub repository tartalmazhat dokumentációt, CI-t és tesztartifactokat, de az app futtatásához ezek nem kellenek.

## Licenc és jogi helyzet

Az eredeti projektkód a repository `LICENSE` fájlja szerint MIT licenc alatt érhető el. Ez **nem** ad jogot harmadik fél védjegyeire, adataira, API-jaira vagy tartalmaira.

A Star Citizenhez, UEX-hez, Star Citizen Wikihez, SCMDB_DATA-hoz és közösségi forrásokhoz kapcsolódó tartalmakra a saját jogaik és feltételeik érvényesek. A projektet nem kereskedelmi Star Citizen rajongói eszközként kell kezelni. Részletek: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) és [docs/LEGAL.hu.md](docs/LEGAL.hu.md).

## Fejlesztés

Codex vagy más fejlesztő számára a belépési pontok:

- `AGENTS.md` – kötelező fejlesztési és biztonsági szabályok.
- `STATUS.md` – jelenlegi baseline és bizonyítékok.
- `docs/ARCHITECTURE.hu.md` – architektúra.
- `docs/TESTING.hu.md` – tesztelési szerződés.
- `tools/check-release.mjs` – offline statikus release gate.

Gyors ellenőrzés:

```bash
node tools/check-release.mjs
```
