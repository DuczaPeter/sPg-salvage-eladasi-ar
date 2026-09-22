# Changelog

## V058-SellOnlyDeterministic — 2026-09-22

- CMAT Sell Only equal-price tie-break ordering is fully ship-independent.
- `cmatSellBySystem()` uses no ship-access filter and no ship-access weight in ordering.
- Added runtime gate `SELL_ONLY_ORDERING_DOES_NOT_USE_SHIP_ACCESS_WEIGHT`.
- User runtime evidence: Sell Only feature block PASS; all ship variants and no-ship baseline match; 50 feature checks; `featureFailures: []`; `errors: []`.

## V057-SellOnlyShipIndependent — 2026-09-22

- CMAT Sell Only no longer requires ship selection.
- CMAT Sell Only no longer filters locations by the selected salvage ship.
- Refine + Sell still requires a ship.
- RMC keeps selected-ship access filtering.
- Added explicit regression gates for these mode boundaries.

## V056-SellOnlyDirectCMAT — 2026-09-22

- CMAT Sell Only now treats the entered amount as already-finished CMAT.
- No gross→net conversion, recovery, or refining loss in Sell Only.
- Added bilingual direct-sale amount labels and dedicated runtime diagnostics.


## V055-GitHubRelease — 2026-09-22

**HU:** Professzionális GitHub release csomag. A V054 funkcionális baseline megmarad; az apphoz látható kétnyelvű fan-site/legal notice került, valamint teljes HU/EN dokumentáció, licenc/third-party notice, Codex metadata, CI/static gate, diagramok és tesztartifactok.

**EN:** Professional GitHub release package. V054 remains the functional baseline; the app adds a visible bilingual fan-site/legal notice plus complete HU/EN documentation, licensing/third-party notices, Codex metadata, CI/static gate, diagrams, and test artifacts.

## V054-UEXDeepLinks — 2026-09-22

- CMAT and RMC large headings link to their UEX demand pages.
- Rendered sale locations link to exact commodity + terminal demand views using terminal IDs.
- Dedicated `uexDeepLinks` diagnostic gate: PASS in the supplied runtime log.
- `featureFailures: []`, `errors: []` in validated user runtime log.

## V053-AdaptiveSlimPipeline — 2026-09-22

- Dynamic LIVE-system scoped UEX location discovery.
- Targeted SC Wiki facility queries instead of full location pagination.
- Runtime data pruned to Salvage-relevant operational rows.
- Cache shape changed to `SALVAGE_OPERATIONAL_SNAPSHOT`.
- Patch/build discovery remains dynamic.

## V052-IndexedDBOnlyStorage — 2026-09-22

- Preferences and large data cache moved to IndexedDB runtime persistence.
- localStorage removed as a runtime dependency.
- Legacy localStorage keys become cleanup/migration-only.

## V051-IndexedDBStorageFoundation — 2026-09-22

- Large API/cache payload moved out of localStorage into IndexedDB.
- Introduced storage-health diagnostics and migration foundations.

## V050-StorageResilientControls — 2026-09-22

- Storage write failures no longer stop user controls/rendering.
- Hardened refining-method, ship, language and version persistence paths.

## V049-StorageSafeControls — 2026-09-22

- Protected result-limit persistence from storage exceptions.
- Added bfcache/disabled-state recovery path without breaking diagnostic locking.

## V048-NativeRadioControls — candidate foundation

- Replaced fragile segmented-button interaction for CMAT/result groups with independent native radio groups.
- Used as the interaction foundation for later stable releases.

## V047-ResultToggleHardening / V046-StableControls / V045-ControlIsolation

- Incremental isolation, fixed control geometry, event binding and diagnostic hardening for CMAT mode and Top 3/All controls.

## V043-CommunityMeasured / V042-PhaseB / V040-PhaseA

- Introduced mandatory ship → structural material resolution.
- Activated material-specific community recovery model: Rubble 40%, Pieces 20%, Salvage 15.2% when no usable current direct audit exists.
- Isolated material-specific refinery bonuses.
- Removed user-facing all-ships calculation path.

## V039 — authoritative original continuation baseline

- Established the original single-file bilingual CMAT/RMC calculator and access/ranking foundation used by later versions.
