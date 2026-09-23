# Tesztelési szerződés

## Offline release gate

Minden release-nél kötelező a `node tools/check-release.mjs`. A gate ellenőrzi a JavaScript syntaxot, egyedi DOM ID-kat, pontosan 2 numerikus inputot, single-file jelleget, APP_VERSION-t, HU/EN jelenlétet, forráskrediteket, fan-site notice-t, IndexedDB/slim-pipeline markereket, UEX deep-link diagnosztikát és a Sell Only statikus invariánsait.

Külön hard gate: a `cmatSellBySystem()` függvény nem tartalmazhat `passesShipFilter` hívást és nem használhat `shipAccessWeight`/`hangarAccessWeight` tie-breaket.

## Runtime diagnosztika

Kötelező lefedés: 144 legacy coverage kombináció; structural resolver; material recovery/bonus isolation; control isolation; storage architecture; adaptive data pipeline; UEX deep links; operational access audit; CMAT Sell Only direct amount/no recovery; ship-independent results; ship-independent ordering; Sell Only no ship requirement; Refine + Sell ship requirement.

A validált V058 log: 144/144, 120 PASS, 24 valid EMPTY, 0 ERROR, 50 feature check, 0 feature failure, 0 runtime error.

## UI/event változás

Gomb, radio, click/touch, render vagy layout módosításnál valódi browser interaction acceptance szükséges. A state mock önmagában nem elég.

Minimum: Refine+Sell Top3↔All; Sell Only Top3↔All; Dinyx↔Pyrometric; hajóváltás Sell Only módban minden canonical salvage hajóra + no-ship baseline; aktív vizuális állapot és tényleges DOM lista ellenőrzése.

## ATTENTION nem automatikusan FAIL

Az access audit ATTENTION elfogadható, ha a hiányzó source evidence UNKNOWN-ként marad és kizáródik a bizonyítékot igénylő ship rankingből. Találgatás lenne a hiba.

## V4.2 package-gate

A release gate ellenőrzi a kanonikus V4.2 standard jelenlétét és SHA-256 egyezését, minden inventoryban, CHECKSUMS-ban és manifestben felsorolt fájl tényleges létezését (a ponttal kezdődő fájlokkal együtt), a `.gitattributes` sorvég-szabályt, azt, hogy a `README.md` teljes főoldal, továbbá a Release Contractot, a baseline és release SHA-256 egyezését, a runtime evidence hash-kötését, a credential/secret cleanliness-t, a vizuális assetek jelenlétét, valamint azt, hogy ne kerüljön SCMDB_DATA adatdump a csomagba.
