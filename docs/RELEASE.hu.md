# Release folyamat

1. `STATUS.md` és `AGENTS.md` ellenőrzése.
2. A runtime-validált `index.html` legyen a baseline; ne generáld újra.
3. Csak célzott source módosítás.
4. `node tools/check-release.mjs`.
5. UI/event módosításnál valódi browser acceptance.
6. Runtime log mentése `test-artifacts/<VERSION>/runtime-log.json` alá.
7. `runtime-summary.json`, `CHANGELOG.md`, `STATUS.md`, `VERSION.json` frissítése.
8. `index.html` és a `release/` alatti egyfájlos HTML byte-parity ellenőrzése.
9. SHA-256 rögzítése és file inventory generálása.
10. Push/tag/release csak felhasználói jóváhagyással.

A felhasználói release mindig egyetlen önálló HTML.
