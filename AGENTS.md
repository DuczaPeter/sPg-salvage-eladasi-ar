# AGENTS.md — sPg Salvage Selling Price

## HU — Kötelező szabályok Codexnek / fejlesztőnek

- Baseline: `index.html` = **V058-SellOnlyDeterministic**; exact user-runtime validated artifact.
- Baseline SHA-256: `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9`.
- Runtime evidence: `test-artifacts/V058/runtime-log.json` (SHA-256 `b5729da604433d0c65eb76790c237900ab695e05a9c71e1333a95ede33301b7c`).
- Ne generáld újra az appot. A meglévő single-file HTML-t módosítsd célzottan.
- Dirty/WIP állapotot őrizd meg. Reset, checkout overwrite, destruktív cleanup tilos.
- A user release mindig egyetlen önálló `.html`, beágyazott CSS/JS-sel.
- HU/EN UI parity kötelező.
- Ne találj ki Star Citizen mechanikát, árat, access méretet, bonuszt, recoveryt vagy ship mappinget.
- Source precedence: current direct source > versioned audited mapping/evidence > UNKNOWN. Régebbi fallback nem vétózhat frissebb direkt LIVE bizonyítékot.
- Refine + Sell ship mapping: Salvation/Vulture/Fortune→Rubble; MOTH→Pieces; Reclaimer→Salvage.
- Recovery fallback ha nincs usable current direct audit: Rubble 0.40; Pieces 0.20; Salvage 0.152; provenance + non-authoritative státusz megőrzendő.
- Bonus isolation: Rubble Levski +9% ahol explicit; Pieces nincs explicit bonus; Salvage Levski +8% ahol explicit. Bonus nem folyhat át más materialra.
- Access: S/M/L verified sufficient Hangar OR Landing Pad. XL kizárólag verified XL Hangar + Docking. Unknown/conflict kizárva, nem kitalálva.
- **CMAT Sell Only invariáns:** input = kész CMAT; nincs recovery/refining loss; nem kell ship; nincs ship filter; nincs ship-dependent ordering. A teljes lista/sorrend/ár ship selectiontől független.
- **Refine + Sell invariáns:** ship kötelező; structural resolver, recovery és ship access aktív.
- **RMC invariáns:** selected ship access filter aktív.
- Demand marad UEX deep link; külön demand engine csak explicit új scope esetén.
- IndexedDB az elsődleges runtime persistence; localStorage soha ne legyen újra szükséges runtime dependency.
- Adaptive slim pipeline + dynamic patch discovery megőrzendő; ne hardcode-old a jelenlegi system listát.
- Új normál source-adat automatikusan bejöhet; új mechanikai jelentés UNKNOWN/FAIL, amíg nincs bizonyíték.
- Minden új feature-höz/bugfixhez új automatikus regressziós check kell a diagnosztikába.
- Befejezés előtt: `node tools/check-release.mjs`.
- UI/event változásnál valódi browser interaction evidence kell, mielőtt runtime PASS állítható.
- `STATUS.md` és `CHANGELOG.md` frissítendő.
- Push/tag/release csak explicit felhasználói jóváhagyással.

## EN — Mandatory rules for Codex / developers

- Baseline: `index.html` = **V058-SellOnlyDeterministic**, the exact user-runtime validated artifact.
- Baseline SHA-256: `0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9`.
- Runtime evidence: `test-artifacts/V058/runtime-log.json` (SHA-256 `b5729da604433d0c65eb76790c237900ab695e05a9c71e1333a95ede33301b7c`).
- Do not regenerate the app; modify the existing single-file HTML narrowly.
- Preserve dirty/WIP state; no destructive reset/overwrite.
- User release must remain one standalone HTML with embedded CSS/JS.
- Keep HU/EN UI parity.
- Never invent Star Citizen mechanics/data.
- Preserve source precedence, accepted ship/material mapping, recovery, bonus isolation, and access policy.
- **CMAT Sell Only:** entered amount is finished CMAT; no recovery/refining loss; no ship requirement/filter/ordering influence; result list/order/prices must be ship-independent.
- **Refine + Sell:** ship required; structural resolver, recovery, and ship access remain active.
- **RMC:** selected-ship access filtering remains active.
- Demand remains externalized to UEX deep links unless explicit new scope changes this.
- IndexedDB remains primary persistence; localStorage must not become a runtime dependency.
- Preserve dynamic/adaptive patch discovery and slim operational snapshot behavior.
- Every new feature/bugfix must extend automatic diagnostic regression coverage.
- Run `node tools/check-release.mjs`; UI/event changes also need real browser interaction evidence.
- Update `STATUS.md` and `CHANGELOG.md`.
- No push/tag/release without explicit user approval.

## Release standard / Release szabvány

For full GitHub release or release-package work, use `docs/RELEASE_STANDARD.md` and start with `docs/RELEASE-CONTRACT.md`. Do not load or apply the full release workflow during ordinary development tasks. If a dedicated release skill is available it may assist execution, but the project-local standard remains authoritative unless explicitly overridden by the user's current instruction.
