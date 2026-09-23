# Release Contract — sPg Salvage Eladási Ár / Salvage Selling Price

**Contract date:** 2026-09-23  
**Release standard:** V4.1  
**Scope:** packaging/documentation release only; application runtime artifact must remain byte-identical to the validated V058 baseline.

## Contract

| Field | Value |
|---|---|
| PROJECT TYPE | Public single-file browser HTML Star Citizen fan utility + repository documentation |
| PRIMARY LANGUAGE | Hungarian, with English documentation/UI parity |
| CANONICAL BASELINE | `V058-SellOnlyDeterministic` |
| MAIN ARTIFACT | `release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html` (`index.html` mirror) |
| BASELINE SHA-256 | `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9` |
| TARGET VERSION | Application stays `V058-SellOnlyDeterministic`; package revision updated to Release Standard V4.1 |
| PUBLIC RELEASE | YES |
| RUNTIME VALIDATION REQUIRED | YES. Satisfied by the existing exact-hash V058 runtime evidence; no application bytes are changed in this packaging revision. |
| PACKAGE / ZIP REQUIRED | YES — explicitly requested by the user |
| LICENSE STATUS | Existing MIT license preserved for original project code/docs/art only; third-party IP/data remain excluded |
| RELEASE STATUS TARGET | `READY WITH LIMITATIONS` because documented access-data UNKNOWN/ATTENTION remains, while required gates are satisfied |

## REQUIRED gates

- Canonical baseline identified.
- Main artifact identified.
- Static validation.
- Credential / secret cleanliness.
- License status resolved.
- Version consistency.
- Baseline/index/release byte-parity.
- Exact runtime-evidence binding to the unchanged artifact hash.
- Single-file no-local-runtime-dependency check.
- HU/EN UI and important documentation parity.
- Existing V058 Sell Only regression invariants remain present.
- External-data redistribution status documented.
- Third-party / fan / trademark status documented without relicensing external data.
- Package cleanliness.
- Final checksum + inventory/manifest consistency.

## OPTIONAL gates

- New runtime rerun: not required because no runtime artifact bytes change and exact-hash runtime evidence already exists.
- Fresh real UI screenshot: OPTIONAL. Browser capture is environment-blocked by administrator policy; existing original project graphics remain valid documentation assets. This must not be mislabeled as N/A or runtime evidence.
- GitHub repository Social Preview UI setting: manual external GitHub step, not part of the local package artifact.

## Relevant visual assets

- `docs/images/social-preview.png/.svg`
- `docs/images/architecture.png/.svg`
- `docs/images/workflow.png/.svg`
- `docs/images/validation-status.png/.svg`

## N/A elements

- Baseline byte-parity is **not** N/A; it is REQUIRED because this is a packaging-only revision.
- New application version is N/A because no program code changes are allowed in this scope.

## Deviations

None requested by the user for this package.

## Do not touch

- Do not modify `index.html` or the release HTML.
- Do not reopen accepted V058 recovery/access/Sell Only/RMC policies.
- Do not add or redistribute third-party data dumps.
