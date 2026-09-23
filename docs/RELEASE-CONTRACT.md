# Release Contract — sPg Salvage Eladási Ár / Salvage Selling Price

**Contract date:** 2026-09-23  
**Release standard:** V4.2  
**Package revision:** `V058-GitHub-Release-Standard-V4.2` (previous: `V058-GitHub-Release-Standard-V4.1` — HISTORICAL)  
**Scope:** packaging/documentation release only; application runtime artifact must remain byte-identical to the validated V058 baseline.

## Contract

| Field | Value |
|---|---|
| PROJECT TYPE | Public single-file browser HTML Star Citizen fan utility + repository documentation |
| PRIMARY LANGUAGE | Hungarian, with English documentation/UI parity |
| CANONICAL BASELINE | `V058-SellOnlyDeterministic`; repository baseline for this package: published `main` commit `6ab3acf9db9017cd210289ca8bf26616bff6c0e6` |
| MAIN ARTIFACT | `release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html` (`index.html` mirror) |
| BASELINE SHA-256 | `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9` |
| TARGET VERSION | Application stays `V058-SellOnlyDeterministic`; package revision updated to Release Standard V4.2 |
| PUBLIC RELEASE | YES |
| RUNTIME VALIDATION REQUIRED | YES. Satisfied by the existing exact-hash V058 runtime evidence; no application bytes are changed in this packaging revision. |
| PACKAGE / ZIP REQUIRED | YES — explicitly requested by the user |
| REPOSITORY PUBLICATION | MANUAL BY USER |
| LICENSE STATUS | Existing MIT license preserved for original project code/docs/art only; third-party IP/data remain excluded |
| RELEASE STATUS TARGET | PACKAGE STATUS `READY WITH LIMITATIONS` (documented access-data UNKNOWN/ATTENTION remains); PUBLISHED RELEASE STATUS `BLOCKED` until the post-publish fresh-clone check passes |

## Scope of this package

The V4.1 package revision was published without its dot-prefixed files (`.gitattributes`, `.github/` templates and workflow, `.gitignore`), although `FILE-INVENTORY.json` listed them; the V4.1 gate did not verify inventory existence and therefore still reported PASS. This revision:

- recreates the dot-prefixed files (the V4.1 originals were not available, so these are new files with new hashes);
- adds a V4.2 `.gitattributes` line-ending policy with `-text` protection for hash-bound files;
- extends the release gate with inventory/checksum/manifest existence parity, line-ending policy and canonical standard SHA-256 checks;
- makes `README.md` the full Hungarian landing page (it was a short bilingual summary);
- replaces `docs/RELEASE_STANDARD.md` with the canonical V4.2 standard (the V4.1 copy was a condensed rewrite, not the canonical text);
- regenerates inventory, manifest and checksums with a new `tools/build-manifest.mjs`.

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
- HU/EN UI and important documentation parity; `README.md` is a full primary-language landing page.
- Existing V058 Sell Only regression invariants remain present.
- External-data redistribution status documented.
- Third-party / fan / trademark status documented without relicensing external data.
- Package cleanliness.
- Final checksum + inventory/manifest consistency.
- Inventory / checksum / manifest existence parity, including dot-prefixed files (V4.2 §69).
- Line-ending / `.gitattributes` policy; runtime evidence protected with `-text` (V4.2 §70–72).
- Canonical V4.2 standard byte identity (SHA-256 `f3b1358844a9f04da5ea8bfd6fe87b3051bd052e753bd8451991b39f894972b2`).
- Published repository parity (V4.2 §67): MANUAL BY USER, therefore NOT VERIFIED + BLOCKED until the post-publish fresh-clone check.

## OPTIONAL gates

- New runtime rerun: not required because no runtime artifact bytes change and exact-hash runtime evidence already exists.
- Fresh real UI screenshot: OPTIONAL. Not captured in this packaging environment; existing original project graphics remain valid documentation assets. This must not be mislabeled as N/A or runtime evidence.
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
- Do not modify `test-artifacts/V058/runtime-log.json` (hash-bound runtime evidence).
- Do not reopen accepted V058 recovery/access/Sell Only/RMC policies.
- Do not add or redistribute third-party data dumps.
