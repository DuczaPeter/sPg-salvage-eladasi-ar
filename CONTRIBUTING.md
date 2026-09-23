# Contributing / Közreműködés

## HU

1. A `STATUS.md` és `AGENTS.md` elolvasása kötelező módosítás előtt.
2. Az `index.html` maradjon önálló, egyfájlos felhasználói release.
3. HU/EN felületet együtt kell frissíteni.
4. Ne találj ki Star Citizen adatot; változó mechanikát forrásból igazolj.
5. A direkt aktuális forrás elsőbbséget élvez a régebbi fallbacknél.
6. A jelenlegi access/recovery döntéseket csak új bizonyíték alapján nyisd újra.
7. Futtasd: `node tools/check-release.mjs`.
8. UI/event változásnál valódi browser-interakciós teszt kell a következő release előtt.
9. Frissítsd a `CHANGELOG.md` és `STATUS.md` fájlt.
10. Ne pusholj, tagelj vagy release-elj automatikusan felhasználói jóváhagyás nélkül.

## EN

1. Read `STATUS.md` and `AGENTS.md` before changing code.
2. `index.html` must remain a standalone single-file user release.
3. Keep HU/EN UI in parity.
4. Never invent Star Citizen data; verify changing mechanics from sources.
5. Current direct source evidence outranks older fallback data.
6. Reopen accepted access/recovery decisions only with new evidence.
7. Run: `node tools/check-release.mjs`.
8. UI/event changes require real browser interaction testing before the next release.
9. Update `CHANGELOG.md` and `STATUS.md`.
10. Do not push, tag, or publish a release without explicit user approval.
