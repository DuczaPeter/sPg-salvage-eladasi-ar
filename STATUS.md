# STATUS.md

## HU

### Jelenlegi csomag

- Release candidate: **V055-GitHubRelease**
- `index.html` SHA-256: `0a5188ba5073c88478c186ac4dc03f68b9a05c7fc0f37dc2dc44fbc3be6b8f78`
- Funkcionális baseline: **V054-UEXDeepLinks**
- V054 SHA-256: `a19adedee93b2ba9bb35d8daa8e6c62efdc854dcef963c51b42bdaa1b69887ea`
- V054 runtime log: `test-artifacts/V054/runtime-log.json`
- Runtime log SHA-256: `1fa74ad1cc5a51be48dc42c30515ca37d71f9aee86ea8db5b3ae3d9e90c1e234`

### V054 runtime bizonyíték

- Coverage: 144/144 executed.
- PASS: 120.
- Valid EMPTY: 24.
- ERROR: 0.
- Feature checks: 42.
- Feature failures: 0.
- Runtime `errors`: 0.
- Storage architecture: PASS.
- Adaptive slim data pipeline: PASS.
- UEX deep links: PASS.
- Control isolation: PASS.
- Overall coverage status: ATTENTION only because facility-access evidence is incomplete for some locations.
- Operational access audit: 59 facilities; 40 VERIFIED, 19 UNKNOWN, 0 CONFLICT.

### V055 változás

A V055 nem módosította a számítási, recovery, refinery, access, ranking, storage vagy adatpipeline üzleti logikát. Csak:

1. `APP_VERSION` → `V055-GitHubRelease`.
2. Látható kétnyelvű fan-site/legal notice került az app aljára.
3. GitHub dokumentáció, licencek/notices, CI/static check, diagramok és Codex metadata került a repository-csomagba.

A V055-re ebben a környezetben nem áll rendelkezésre teljes valódi böngészős runtime futás; ezért a V054 marad a runtime-validated functional evidence, V055-re pedig statikus parity/release gate készült.

## EN

### Current package

- Release candidate: **V055-GitHubRelease**
- `index.html` SHA-256: `0a5188ba5073c88478c186ac4dc03f68b9a05c7fc0f37dc2dc44fbc3be6b8f78`
- Functional baseline: **V054-UEXDeepLinks**
- V054 SHA-256: `a19adedee93b2ba9bb35d8daa8e6c62efdc854dcef963c51b42bdaa1b69887ea`
- V054 runtime log: `test-artifacts/V054/runtime-log.json`
- Runtime log SHA-256: `1fa74ad1cc5a51be48dc42c30515ca37d71f9aee86ea8db5b3ae3d9e90c1e234`

### V054 runtime evidence

- Coverage: 144/144 executed.
- PASS: 120.
- Valid EMPTY: 24.
- ERROR: 0.
- Feature checks: 42.
- Feature failures: 0.
- Runtime `errors`: 0.
- Storage architecture: PASS.
- Adaptive slim data pipeline: PASS.
- UEX deep links: PASS.
- Control isolation: PASS.
- Overall ATTENTION is limited to incomplete facility-access evidence.
- Operational access audit: 59 facilities; 40 VERIFIED, 19 UNKNOWN, 0 CONFLICT.

### V055 delta

V055 does not change calculation, recovery, refinery, access, ranking, storage or data-pipeline business logic. It only changes the app version, adds a visible bilingual fan/legal notice, and adds repository documentation/metadata/tooling.

No full real-browser V055 runtime run is available from this environment, so V054 remains the runtime-validated functional evidence and V055 is covered by static parity/release gates.
