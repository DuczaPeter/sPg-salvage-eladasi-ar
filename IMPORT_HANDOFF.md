# IMPORT_HANDOFF.md

One-time first takeover context for Codex.

The product already exists and works as a single-file HTML application. `index.html` is the baseline and must not be regenerated, reformatted wholesale, split into modules, or replaced with a different architecture during import.

Key non-obvious decisions:
1. LIVE data safety is more important than filling every row. Missing location access is UNKNOWN and excluded, never guessed.
2. Location Hangar, Landing Pad and Docking are separate evidence. XL requires explicit XL Hangar + Docking.
3. Newer UEX LIVE access evidence can outrank an older same-minor Wiki disagreement; diagnostics must still record the stale secondary disagreement.
4. CMATS → CMAT base recovery is not verified by current sources. `1/6` is an explicit fallback and must stay labeled unverified.
5. Refine + Sell only pairs refinery and CMAT sale at the same safely matched facility.
6. User requested compact system accordions, grouped equal-price results, total sale value as the prominent number, bilingual UI, and exactly two numeric amount inputs.
7. “Log másolása” is the evidence path: it runs the exhaustive 144-case functional coverage plus a separate operational access completeness audit.

Latest diagnostic evidence:
- 144/144 checks completed: 120 PASS, 24 EMPTY, 0 UNKNOWN HANGAR, 0 CONFLICT, 0 ERROR.
- Operational audit: 47 VERIFIED / 12 UNKNOWN / 0 CONFLICT, therefore overall ATTENTION.
- 12 UNKNOWN locations are source-data gaps, not to be patched with assumptions.

First takeover acceptance:
- Preserve `index.html` byte-for-byte during scaffold/import.
- Create/retain only minimal project control metadata.
- Do not change business logic or UI during takeover.
- Stop after import/state verification unless the user separately assigns a development task.
