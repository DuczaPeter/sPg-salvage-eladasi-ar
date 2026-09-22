# Testing contract

## Offline release gate

Every release must run `node tools/check-release.mjs`. The gate checks inline JavaScript syntax, unique DOM IDs, exactly 2 numeric inputs, standalone single-file behavior, APP_VERSION, HU/EN presence, source credits, visible fan-site notice, IndexedDB/slim-pipeline markers, UEX deep-link diagnostics, and static Sell Only invariants.

Hard gate: `cmatSellBySystem()` must not contain `passesShipFilter` and must not use `shipAccessWeight`/`hangarAccessWeight` for tie-breaking.

## Runtime diagnostics

Required coverage: 144 legacy combinations; structural resolver; material recovery/bonus isolation; control isolation; storage architecture; adaptive data pipeline; UEX deep links; operational access audit; CMAT Sell Only direct amount/no recovery; ship-independent results; ship-independent ordering; no ship requirement for Sell Only; ship requirement for Refine + Sell.

Validated V058 runtime evidence: 144/144, 120 PASS, 24 valid EMPTY, 0 ERROR, 50 feature checks, 0 feature failures, 0 runtime errors.

## UI/event changes

Button, radio, click/touch, render, or layout changes require real browser interaction acceptance. Pure state mocks are insufficient.

Minimum: Refine+Sell Top3↔All; Sell Only Top3↔All; Dinyx↔Pyrometric; ship switching in Sell Only across every canonical salvage ship plus no-ship baseline; active visual state and actual rendered list validation.

## ATTENTION is not automatically FAIL

Access-audit ATTENTION is acceptable when missing source evidence remains UNKNOWN and is safely excluded from decisions requiring proof. Guessing would be the failure.
