# Architecture

## Principle

The user release is one standalone HTML file. Network data are loaded at runtime, normalized, and reduced to only what the Salvage workflow needs.

## Layers

1. **Source discovery** – UEX LIVE systems, SCMDB latest build, SC Wiki default version.
2. **Scoped fetch** – location data by LIVE system; commodity prices for CMAT/RMC; SC Wiki only for relevant fallback facilities.
3. **Normalization** – consistent system/facility/terminal/ship/commodity structures.
4. **Salvage resolver** – selected ship → structural material.
5. **Recovery model** – current direct audit first, otherwise provenance-bound community model; legacy fallback only for UNKNOWN/unmapped future materials.
6. **Access resolver** – ship required access and facility access are resolved from separate evidence.
7. **Ranking** – CMAT refine+sell / sell-only and RMC results ranked per system.
8. **UEX deep links** – demand detail is delegated to UEX.
9. **Persistence** – small Salvage Operational Snapshot and preferences in IndexedDB.
10. **Diagnostics** – coverage matrix + feature gates + source fetch log + provenance.

## Fail-safe principle

New normal data can flow in through the dynamic pipeline. If the meaning of a new mechanic cannot be proven, the app does not guess; it keeps UNKNOWN/FAIL/ATTENTION.

![Architecture](images/architecture.png)
