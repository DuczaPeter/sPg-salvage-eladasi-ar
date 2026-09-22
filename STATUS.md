# STATUS.md

Project: sPg Salvage Eladási Ár
Baseline: V039
Primary artifact: index.html (byte-identical to sPg_salvage_eladasi_ar_V039.html)
Git branch/HEAD: not initialized in this package
State: ChatGPT-built working artifact; first Codex takeover not yet performed.

Validated 2026-09-22 diagnostic:
- UEX LIVE 4.10.1
- SCMDB 4.10.1-live.12660092, base match: yes
- SC Wiki LIVE 4.10.0-LIVE.12519617, patch-lag warning: yes
- coverage: 144/144 checks; 120 PASS, 24 EMPTY, 0 UNKNOWN HANGAR, 0 CONFLICT, 0 ERROR
- coverage runtime: 1208 ms
- operational access audit: 47 VERIFIED, 12 UNKNOWN, 0 CONFLICT => overall ATTENTION

Known limitations:
- CMATS base recovery still uses explicit unverified 16.67% fallback; no method-specific CMATS audit.
- 12 operational facilities lack verified access size and are not guessed.

Current UI: compact one-row controls, bilingual HU/EN, CMAT/RMC side-by-side result modules, system accordions, Top 3/All grouped result styling.

Next task: none assigned. Preserve V039 until the user requests a concrete change.
