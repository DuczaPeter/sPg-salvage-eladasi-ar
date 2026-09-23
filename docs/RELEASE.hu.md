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

## V4.2 release-szabvány

Teljes GitHub release/package munka a `docs/RELEASE_STANDARD.md` V4.2 szerint indul, és mindig `docs/RELEASE-CONTRACT.md` rögzítésével kezdődik. A V058 jelen csomagolási köre kizárólag dokumentációs/release-metadata scope: az alkalmazás artifact byte-pontosan változatlan marad. A végső gate-eket és limitations állapotot a `docs/RELEASE-AUDIT-V4.2.md` rögzíti. A publikálás git-tel vagy GitHub Desktoppal történjen (a webes feltöltés kihagyja a ponttal kezdődő fájlokat), utána a gate-et a publikált repository friss klónján is le kell futtatni.
