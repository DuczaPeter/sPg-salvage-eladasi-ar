# Adatforrások és precedence

## UEX API 2.0

Elsődleges forrás az aktuális árakhoz, terminálokhoz, LIVE rendszerekhez, `vehicles.pad_type`, location `pad_types` és más működési adatokhoz.

A program nem tartja meg a teljes upstream adatbázist. A discovery után csak a Salvage-hoz szükséges sorok maradnak.

## SCMDB_DATA

A `latest.json` alapján választja ki az aktuális mining adatfájlt. Refinery név/profile és anyagbonus keresztellenőrzésre használjuk. A teljes dataset nincs a release-be csomagolva.

## Star Citizen Wiki API

Másodlagos/célzott fallback. A teljes location pagination helyett csak a ténylegesen releváns facilityket kérdezzük le, amikor UEX access adat nem elég.

A publikus projekt kreditje: `api.star-citizen.wiki`.

## Precedence

1. Aktuális, direkt online field.
2. Verziózott, auditált mapping/evidence.
3. UNKNOWN.

Régebbi secondary forrás nem írhatja felül a frissebb direkt LIVE adatot.

## Recovery precedence

1. Használható current-LIVE direkt UEX refinery audit.
2. Elfogadott `COMMUNITY_MEASURED` material profile provenance-nal.
3. Legacy `1/6` csak ismeretlen/unmapped jövőbeli material esetére.

## Material bonus isolation

- Rubble és Salvage bonus külön commodityhoz kötött.
- Pieces nem örökli más material bonusát.
- SCMDB CMATS fallback kizárólag Salvage útvonalra alkalmazható.

## Automatikus jövőbeli frissítés

A normál source-adatváltozásokat dinamikus discovery kezeli. Új mechanikai szemantika nem kerül automatikusan kitalálásra.
