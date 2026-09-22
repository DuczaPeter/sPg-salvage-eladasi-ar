# Release folyamat

1. `STATUS.md` és `AGENTS.md` ellenőrzése.
2. Csak célzott source módosítás.
3. `node tools/check-release.mjs`.
4. UI/event változásnál valódi browser acceptance.
5. Runtime log mentése `test-artifacts/<VERSION>/` alá.
6. `CHANGELOG.md`, `STATUS.md`, `VERSION.json` frissítése.
7. A release HTML külön `release/` alatt is legyen meg.
8. SHA-256 rögzítése.
9. Push/tag/release csak felhasználói jóváhagyással.

A release artifact továbbra is egyetlen önálló HTML.
