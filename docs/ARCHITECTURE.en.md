# Architecture

## Principle

The user release is one standalone HTML file. Network data are loaded at runtime, normalized, and reduced to Salvage-relevant operational data.

## Layers

1. **Source discovery** – UEX LIVE systems, SCMDB latest build, SC Wiki default version.
2. **Scoped fetch** – location data by LIVE system; CMAT/RMC commodity prices; SC Wiki only for relevant fallback facilities.
3. **Normalization/pruning** – only Salvage-relevant operational rows survive upstream discovery.
4. **Mode boundary** – Refine + Sell, CMAT Sell Only, and RMC have separate rules.
5. **Structural resolver** – Refine + Sell only: selected ship → Rubble/Pieces/Salvage.
6. **Recovery/bonus** – Refine + Sell only; direct audit first, provenance-bound community fallback otherwise.
7. **Access resolver** – used by Refine + Sell and RMC; forbidden from influencing CMAT Sell Only.
8. **Ranking** – Refine + Sell ship-dependent; CMAT Sell Only deterministic and ship-independent; RMC ship-access filtered.
9. **UEX deep links** – demand detail delegated to current UEX commodity/terminal views.
10. **Persistence** – IndexedDB preferences + Salvage Operational Snapshot; localStorage legacy-only.
11. **Diagnostics** – 144 coverage combinations + feature gates + source/provenance logs.

## Deterministic CMAT Sell Only invariant

`cmatSellBySystem()` must not invoke ship-access filtering, and equal-price tie-break ordering must not use ship-access weight. Dedicated runtime and offline release gates protect this boundary.

## Fail-safe principle

Normal new source data may flow in automatically. New mechanic meaning is never guessed; UNKNOWN/FAIL/ATTENTION remains until proven.

![Architecture](images/architecture.png)
