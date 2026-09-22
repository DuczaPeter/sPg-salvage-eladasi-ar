# AGENTS.md — sPg Salvage Selling Price

## HU — Kötelező szabályok Codexnek / fejlesztőnek

- Baseline user release: `index.html` = **V055-GitHubRelease**.
- Last full user-runtime validated functional baseline: **V054-UEXDeepLinks**; evidence: `test-artifacts/V054/runtime-log.json`.
- Do not regenerate the app from scratch. Modify the existing single-file HTML in place.
- Preserve dirty/WIP state. No reset, checkout overwrite, or destructive cleanup.
- The user release MUST remain one standalone `.html` file with embedded CSS/JS.
- Keep HU and EN UI in parity.
- Do not invent Star Citizen mechanics, prices, access sizes, refinery bonuses, recovery ratios, or ship mappings.
- Source precedence: current direct source > versioned mapping > UNKNOWN. Older fallback may not veto newer direct LIVE evidence.
- Ship selection is mandatory. No user-facing `all ships` calculation path.
- Accepted ship → material mapping: Salvation/Vulture/Fortune→Rubble; MOTH→Pieces; Reclaimer→Salvage.
- Accepted fallback recovery model when no usable current direct audit exists: Rubble 0.40; Pieces 0.20; Salvage 0.152. Keep provenance and non-authoritative status.
- Bonus isolation: Rubble Levski +9% where explicit; Pieces no explicit bonus; Salvage Levski +8% where explicit. Never bleed Salvage bonus into Rubble/Pieces.
- S/M/L: verified sufficiently-sized Hangar OR Landing Pad may qualify. XL: verified XL Hangar + Docking only; XL pad alone or docking alone does not qualify.
- Unknown/conflicting access locations are excluded from ship ranking rather than guessed.
- Demand stays on UEX via deep links; do not duplicate a demand model unless explicitly requested later.
- Runtime persistence: IndexedDB primary. localStorage must never become a required control/data runtime dependency again.
- Adaptive slim pipeline must keep dynamic patch discovery. Never replace it with hard-coded current-system lists.
- New future systems/locations/prices should flow in from source data without per-patch rewrites. New mechanics must fail visibly as UNKNOWN/FAIL until proven.
- Before completion run `node tools/check-release.mjs`.
- For UI/event changes, static checks are not enough: require real browser clicks for all affected transitions before claiming runtime PASS.
- Update `STATUS.md` and `CHANGELOG.md` for meaningful changes.
- No push/tag/release without explicit user approval.

## EN — Mandatory rules for Codex / developers

- Baseline user release: `index.html` = **V055-GitHubRelease**.
- Last full user-runtime validated functional baseline: **V054-UEXDeepLinks**; evidence: `test-artifacts/V054/runtime-log.json`.
- Do not regenerate the app. Modify the existing single-file HTML in place.
- Preserve dirty/WIP state. No reset or destructive overwrite.
- User release MUST remain one standalone `.html` with embedded CSS/JS.
- Maintain HU/EN UI parity.
- Never invent Star Citizen mechanics/data.
- Source precedence: current direct source > versioned mapping > UNKNOWN.
- Preserve the accepted ship/material, recovery, refinery-bonus and access policies above.
- Demand remains externalized to UEX deep links.
- IndexedDB is the primary runtime persistence layer; localStorage must not become a runtime dependency.
- Preserve dynamic/adaptive patch discovery and slim operational snapshot behavior.
- Run `node tools/check-release.mjs` before completion.
- UI/event changes need real browser interaction evidence before claiming runtime PASS.
- Update `STATUS.md` and `CHANGELOG.md`.
- No push/tag/release without explicit user approval.

## Baseline hashes

- V054 validated HTML SHA-256: `a19adedee93b2ba9bb35d8daa8e6c62efdc854dcef963c51b42bdaa1b69887ea`
- V055 packaged `index.html` SHA-256: `0a5188ba5073c88478c186ac4dc03f68b9a05c7fc0f37dc2dc44fbc3be6b8f78`
- V054 runtime log SHA-256: `1fa74ad1cc5a51be48dc42c30515ca37d71f9aee86ea8db5b3ae3d9e90c1e234`
