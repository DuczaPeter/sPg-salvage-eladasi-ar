# User guide

## CMAT — Refine + Sell

1. Select a salvage ship.
2. Enter raw structural salvage SCU.
3. Select `Refine + Sell`.
4. Choose Dinyx or Pyrometric.
5. Apply Surface/Space and Top 3/All filters.
6. Ranking uses ship→material resolution, recovery, refinery bonus, and ship-access rules.

## CMAT — Sell Only

1. Select `Sell Only`.
2. Enter already-finished CMAT under `CMAT to sell, SCU`.
3. No ship selection is required.
4. The amount is used unchanged for revenue.
5. No recovery, refining loss, ship material mapping, or ship-access filter is applied.
6. With identical filters, changing ships must not change the CMAT result list, order, or prices.

## RMC

1. Select a salvage ship; RMC ship-access filtering remains active.
2. RMC amount is optional for viewing prices.
3. Enter SCU for total revenue.
4. Use the location and Top 3/All filters.

## UEX demand links

The large CMAT/RMC heading opens the general commodity demand page. A result location opens the exact commodity + terminal demand view in a new tab.

## UNKNOWN / ATTENTION

UNKNOWN means the required access/mechanic field could not be proven from source evidence. The app does not guess. Overall ATTENTION may still be release-gate acceptable when `featureFailures: []`, `errors: []`, and UNKNOWN locations are fail-safe excluded from decisions that require proof.

## Cache

`Clear cache` removes IndexedDB Salvage Operational Snapshot/preferences according to app rules. Current source data can then be fetched again.
