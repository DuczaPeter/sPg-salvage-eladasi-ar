# Roadmap and closed decisions

## Closed: demand

No separate demand engine. CMAT/RMC headings and result locations use direct UEX demand links. Reopen only under explicit new scope.

## Closed: CMAT Sell Only semantics

Sell Only = direct selling of finished CMAT. No recovery, refining loss, ship requirement, ship-access filter, or ship-dependent ordering. V058 runtime tests cover every canonical salvage ship plus a no-ship baseline.

## Next reasonable functional feature

**Refinery cost + time**, only where a current usable audit proves the values. Otherwise keep UNKNOWN/not available.

## Requires more evidence

- Whole-SCU boxed-output rounding.
- Direct raw Rubble/Pieces/Salvage selling.
- Salvage depot/cargo-grid/fracture limits as optional context.
- Component removal, powered-ship fracture, legality/CrimeStat: real gameplay, outside the current economic scope.

## Patch principle

Normal source data may update automatically. New mechanic semantics require evidence before entering calculations.
