# STATUS.md

## HU

### Jelenlegi baseline

- Release / development baseline: **V058-SellOnlyDeterministic**
- `index.html` SHA-256: `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9`
- Runtime evidence: `test-artifacts/V058/runtime-log.json`
- Runtime log SHA-256: `b5729da604433d0c65eb76790c237900ab695e05a9c71e1333a95ede33301b7c`
- A repository `index.html` és a `release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html` ugyanaz a runtime-validált fájl.

### V058 runtime bizonyíték

- Coverage: 144/144 executed.
- PASS: 120.
- Valid EMPTY: 24.
- ERROR: 0.
- Feature checks: 50.
- Feature failures: 0.
- Runtime `errors`: 0.
- Storage architecture: PASS.
- Adaptive slim data pipeline: PASS.
- Control isolation: PASS.
- UEX deep links: PASS.
- `sellOnlyDirectCmat`: PASS.
- `SELL_ONLY_IGNORES_SALVAGE_SHIP_FILTER`: PASS minden hajóra és hajó nélkül.
- `SELL_ONLY_ORDERING_DOES_NOT_USE_SHIP_ACCESS_WEIGHT`: PASS.
- `SELL_ONLY_DOES_NOT_REQUIRE_SHIP_SELECTION`: PASS.
- `REFINE_SELL_STILL_REQUIRES_SHIP_SELECTION`: PASS.
- Operational access audit: 59 facility; 40 VERIFIED, 19 UNKNOWN, 0 CONFLICT.
- Overall coverage `ATTENTION` kizárólag az UNKNOWN access evidence miatt marad; ez fail-safe adatbizonytalanság, nem feature/runtime hiba.

### Lezárt Sell Only policy

CMAT **Csak Eladás** esetén a beírt mennyiség kész CMAT. Nem alkalmazható recovery, refining loss, ship→material mapping, hajókötelezettség, hajó-access filter vagy hajófüggő tie-break rendezés. Ugyanazon filterekkel a CMAT találati lista, sorrend és ár minden salvage-hajó választásnál és hajó nélkül azonos.

**Finomítás + Eladás** továbbra is hajókötelezett és használja a structural resolver + recovery + access logikát. **RMC** továbbra is a kiválasztott hajó igazolt hozzáférésével szűr.

## EN

### Current baseline

- Release / development baseline: **V058-SellOnlyDeterministic**
- `index.html` SHA-256: `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9`
- Runtime evidence: `test-artifacts/V058/runtime-log.json`
- Runtime log SHA-256: `b5729da604433d0c65eb76790c237900ab695e05a9c71e1333a95ede33301b7c`
- Repository `index.html` and `release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html` are the same runtime-validated file.

### V058 runtime evidence

- Coverage: 144/144 executed.
- PASS: 120.
- Valid EMPTY: 24.
- ERROR: 0.
- Feature checks: 50.
- Feature failures: 0.
- Runtime `errors`: 0.
- Storage architecture: PASS.
- Adaptive slim data pipeline: PASS.
- Control isolation: PASS.
- UEX deep links: PASS.
- `sellOnlyDirectCmat`: PASS.
- Ship-independence, ship-independent ordering, no ship requirement, and Refine + Sell ship requirement: PASS.
- Operational access audit: 59 facilities; 40 VERIFIED, 19 UNKNOWN, 0 CONFLICT.
- Overall coverage `ATTENTION` is limited to UNKNOWN access evidence and is a fail-safe data-completeness state, not a feature/runtime failure.

### Closed Sell Only policy

For CMAT **Sell Only**, the entered amount is finished CMAT. Recovery, refining loss, ship→material mapping, ship requirement, ship-access filtering, and ship-dependent tie-break ordering are forbidden. With identical filters, the CMAT result list/order/prices must be identical for every salvage ship and with no ship selected.

**Refine + Sell** still requires a ship and uses structural resolver + recovery + access logic. **RMC** remains filtered by verified access for the selected ship.

## Release package standard V4.2 / V4.2 release-csomag

- Release Standard: `docs/RELEASE_STANDARD.md` — **V4.2** (canonical SHA-256 `f3b1358844a9f04da5ea8bfd6fe87b3051bd052e753bd8451991b39f894972b2`).
- Release Contract: `docs/RELEASE-CONTRACT.md`.
- Release Audit: `docs/RELEASE-AUDIT-V4.2.md` (previous: `docs/RELEASE-AUDIT-V4.1.md`, HISTORICAL).
- Application artifact remains byte-identical V058; this package revision does not change runtime code.
- Repository publication: **MANUAL BY USER**.
- **PACKAGE STATUS:** **READY WITH LIMITATIONS**.
- **PUBLISHED RELEASE STATUS:** **BLOCKED** — post-publish fresh-clone verification pending.

### Post-publish check / Feltöltés utáni ellenőrzés

Upload with git or GitHub Desktop so dot-prefixed files (`.github/`, `.gitignore`, `.gitattributes`) are included; the V4.1 web upload silently omitted them. Then run on a fresh clone:

```
git clone https://github.com/DuczaPeter/sPg-salvage-eladasi-ar.git salvage-post-publish-check
cd salvage-post-publish-check
node tools/check-release.mjs
```

The PUBLISHED RELEASE STATUS is recalculated after this check.
- Limitation/ATTENTION: 19 operational-access evidence records remain UNKNOWN by fail-safe design; current RSI fan-site notice wording is documented for future exact-text review; fresh UI screenshot capture is OPTIONAL BLOCKED by the current execution environment.
