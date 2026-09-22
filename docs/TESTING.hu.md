# Tesztelési szerződés

## Release gate

Minden release-nél kötelező:

- `node tools/check-release.mjs`
- JavaScript syntax PASS.
- Egyedi DOM ID-k.
- Pontosan 2 numerikus felhasználói input.
- Nincs helyi külső CSS/JS dependency az app futtatásához.
- APP_VERSION jelen van.
- Forráskreditek és fan-site notice jelen van.
- HU/EN i18n objektum jelen van.

## Runtime diagnosztika

A beépített lognak ellenőriznie kell:

- 144 legacy coverage kombináció.
- Structural material resolver.
- Material-specific recovery evidence.
- Bonus isolation.
- CMAT/result control isolation.
- IndexedDB storage architecture.
- Adaptive slim pipeline.
- UEX heading + terminal deep links.
- Operational access completeness.

## UI változás

Ha gomb, radio, click, touch, DOM render vagy layout változik, valódi browser teszt kell. A puszta state mock nem elég.

Minimum transition set a CMAT/result/refining kontrollokra:

- Refine+Sell Top3 ↔ All.
- Sell Only Top3 ↔ All.
- Dinyx ↔ Pyrometric mindkét releváns módban.
- aktív vizuális állapot + tényleges DOM találatszám.

## ATTENTION nem automatikusan FAIL

Az access audit ATTENTION akkor elfogadható, ha forrásból nem bizonyítható egy hely hozzáférése és a program ezt UNKNOWN-ként kizárja a ship rankingből. A találgatás lenne hiba.
