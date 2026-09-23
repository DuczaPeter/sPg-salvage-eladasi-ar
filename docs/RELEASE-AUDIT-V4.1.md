# Release Audit — V058 package under Release Standard V4.1

> **HISTORICAL** — superseded by [RELEASE-AUDIT-V4.2.md](RELEASE-AUDIT-V4.2.md). Kept as the V4.1 audit record.

**Audit date:** 2026-09-23  
**Application:** V058-SellOnlyDeterministic  
**Release standard:** V4.1

## Baseline integrity

The application artifact is intentionally unchanged from the user-runtime-validated V058 baseline.

- Expected SHA-256: `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9`
- `index.html`: verify in `CHECKSUMS.sha256`
- release HTML: verify in `CHECKSUMS.sha256`
- Runtime evidence: `test-artifacts/V058/runtime-log.json`
- Runtime log expected SHA-256: `b5729da604433d0c65eb76790c237900ab695e05a9c71e1333a95ede33301b7c`

Because the package work does not change application bytes, the existing V058 runtime evidence remains bound to the exact same artifact.

## Runtime evidence carried forward

The existing V058 user runtime evidence reports:

- 144/144 coverage checks executed
- 120 PASS
- 24 valid EMPTY
- 0 ERROR
- 50 feature checks
- 0 feature failures
- runtime `errors: []`
- `sellOnlyDirectCmat`: PASS
- ship-independent CMAT Sell Only list/order/prices: PASS
- Refine + Sell ship requirement: PASS
- IndexedDB storage architecture: PASS
- adaptive slim pipeline: PASS

The remaining operational-access state is 40 VERIFIED / 19 UNKNOWN / 0 CONFLICT across 59 relevant facilities. This is documented `ATTENTION`, not a runtime failure.

## Current external legal/source review

Reviewed on 2026-09-23:

- RSI / Star Citizen Fankit and Fandom FAQ: https://support.robertsspaceindustries.com/hc/en-us/articles/360006895793-Star-Citizen-Fankit-and-Fandom-FAQ
- UEX Terms of Use and API Terms: https://uexcorp.space/about/terms
- Star Citizen Wiki API developer usage: https://api.star-citizen.wiki/developers
- Star Citizen Wiki copyright page: https://star-citizen.wiki/Star_Citizen_Wiki:Urheberrechte
- SCMDB_DATA source: https://github.com/KrovaxCode/SCMDB_DATA

No upstream dataset is redistributed in this package. SCMDB_DATA license remains documented conservatively rather than guessed.

### Fan-site notice attention

The application already contains a visible bilingual unofficial-fan-tool notice and links to the official RSI site. The current RSI Fandom FAQ publishes a specific fan-site notice wording. This packaging-only revision intentionally does not change application bytes; exact wording alignment should therefore be treated as a documented legal/presentation `ATTENTION` for a future application revision rather than silently altering the validated V058 artifact.

## Visual audit

Original project visuals retained:

- social preview
- architecture diagram
- workflow diagram
- validation status diagram

They are project-created documentation graphics and do not embed official Star Citizen artwork or logos. A new real UI screenshot was attempted but the execution environment blocked local browser navigation by administrator policy; no blocked/error page is included in the package and no mockup is presented as a screenshot.

## Final release status

**READY WITH LIMITATIONS**

Required gates are satisfied. Non-blocking limitations/attention:

1. 19 operational-access evidence records remain UNKNOWN by design and are fail-safe excluded rather than guessed.
2. Current RSI fan-site notice wording should be reviewed for exact textual alignment in a future application-code revision; this package preserves the validated V058 bytes.
3. No fresh UI screenshot was produced in this environment; this is an OPTIONAL BLOCKED visual item, not runtime evidence.

No required FAIL, ERROR, UNKNOWN, NOT VERIFIED, or BLOCKED gate remains.
