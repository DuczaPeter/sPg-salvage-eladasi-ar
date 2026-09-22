# Testing contract

## Release gate

Required for every release:

- `node tools/check-release.mjs`
- JavaScript syntax PASS.
- Unique DOM IDs.
- Exactly 2 numeric user inputs.
- No local external CSS/JS dependency is required to run the app.
- APP_VERSION is present.
- Source credits and fan-site notice are present.
- HU/EN i18n objects are present.

## Runtime diagnostics

The built-in log must cover:

- 144 legacy coverage combinations.
- Structural material resolver.
- Material-specific recovery evidence.
- Bonus isolation.
- CMAT/result control isolation.
- IndexedDB storage architecture.
- Adaptive slim pipeline.
- UEX heading + terminal deep links.
- Operational access completeness.

## UI changes

If buttons, radios, click/touch events, DOM rendering, or layout change, real browser interaction testing is required. Pure state mocks are not enough.

Minimum transition set for CMAT/result/refining controls:

- Refine+Sell Top3 ↔ All.
- Sell Only Top3 ↔ All.
- Dinyx ↔ Pyrometric in every relevant mode.
- active visual state + actual rendered result count.

## ATTENTION is not automatically FAIL

Access-audit ATTENTION is acceptable when source evidence is insufficient and the app safely excludes the UNKNOWN location from ship ranking. Guessing would be the failure.
