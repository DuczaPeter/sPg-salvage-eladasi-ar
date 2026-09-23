# Release Audit — V058 package under Release Standard V4.2

**Audit date:** 2026-09-23  
**Application:** V058-SellOnlyDeterministic  
**Package revision:** `V058-GitHub-Release-Standard-V4.2`  
**Release standard:** V4.2 (SHA-256 `f3b1358844a9f04da5ea8bfd6fe87b3051bd052e753bd8451991b39f894972b2`)  
**Repository publication:** MANUAL BY USER

## Why this revision exists

The V4.1 package was published without its dot-prefixed files (`.gitattributes`, `.github/` workflow and templates, `.gitignore`), although `FILE-INVENTORY.json` listed them. The V4.1 gate did not check inventory existence, so it still reported PASS on the published repository. Cause: the files were omitted by the web upload.

## Baseline integrity

The application artifact is intentionally unchanged from the user-runtime-validated V058 baseline.

- Expected SHA-256: `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9`
- `index.html` and the release HTML: byte-identical, verified by the gate and `CHECKSUMS.sha256`
- Runtime evidence `test-artifacts/V058/runtime-log.json`: unchanged, SHA-256 `b5729da604433d0c65eb76790c237900ab695e05a9c71e1333a95ede33301b7c`, protected with `-text`

## Evidence

- **Source:** SOURCE VERIFIED (carried from the V4.1 audit; no source-policy change in this revision)
- **Static:** STATIC VERIFIED — `node tools/check-release.mjs`, output in `test-artifacts/V058/static-check-v4.2.json`
- **Runtime:** RUNTIME VERIFIED (existing exact-hash V058 user runtime evidence)
- **Integration:** INTEGRATION VERIFIED (carried by exact-hash V058 runtime evidence)
- **Published repository parity:** NOT VERIFIED — post-publish check pending

## Changes in this revision

- dot-prefixed files recreated (V4.1 originals unavailable; new files, new hashes);
- `.gitattributes`: LF default for normalizable text, `-text` for application HTML and all `test-artifacts/`;
- gate extended: inventory/checksum/manifest existence parity, dot-prefixed files, line-ending policy, canonical standard SHA-256, full `README.md` landing page;
- `README.md` is now the full Hungarian landing page; `README.hu.md` is a stable pointer;
- `docs/RELEASE_STANDARD.md` replaced with the canonical V4.2 text (the V4.1 copy was a condensed rewrite);
- new `tools/build-manifest.mjs` regenerates CHECKSUMS → manifest → inventory in a fixed order.

## Visual audit

Images are byte-identical to the V4.1 package; the V4.1 visual validation (`test-artifacts/V058/visual-validation-v4.1.json`) remains valid for them. A fresh real UI screenshot was not captured in this packaging environment: OPTIONAL BLOCKED, not N/A and not runtime evidence.

## Gates

- **REQUIRED DONE:** all gates in `docs/RELEASE-CONTRACT.md` except published repository parity
- **REQUIRED N/A:** none
- **REQUIRED BLOCKED:** published repository parity (MANUAL BY USER, post-publish check pending)
- **OPTIONAL BLOCKED:** fresh real UI screenshot
- **OPTIONAL N/A:** GitHub Social Preview repository setting is an external manual step

## Limitations

- 19 of 59 operational-access evidence records remain UNKNOWN by fail-safe design (ATTENTION, not FAIL).
- Fan-site notice wording review recorded in the V4.1 audit remains a non-blocking ATTENTION.
- Fresh UI screenshot: OPTIONAL BLOCKED.

## Release status

- **PACKAGE STATUS:** READY WITH LIMITATIONS
- **PUBLISHED RELEASE STATUS:** BLOCKED — manual publication and post-publish verification pending

## Post-publish check

```
git clone https://github.com/DuczaPeter/sPg-salvage-eladasi-ar.git salvage-post-publish-check
cd salvage-post-publish-check
node tools/check-release.mjs
```
