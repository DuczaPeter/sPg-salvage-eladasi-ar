# Roadmap and intentionally open items

## Closed decision: demand

No separate demand engine. The calculator selects relevant locations and provides direct UEX commodity/terminal demand links so demand stays in UEX's current view.

## Next reasonable functional feature

**Refinery cost + time**, but only where a current usable audit proves the values. If trustworthy data are unavailable, the app must not invent cost or duration.

## Intentionally inactive / requires more evidence

- Whole-SCU boxed output rounding: community observations exist but are not strong enough for the primary automatic calculation.
- Direct sale of raw Rubble/Pieces/Salvage: patch/location dependent and not yet stable enough for the main model.
- Salvage depot/cargo-grid/fracture limits: useful context but not required for sale-price math.
- Component removal, powered-ship fracture, legality/CrimeStat: real gameplay mechanics but outside the current economic-calculator scope.

## Future patch principle

Normal source-data changes may flow in automatically. New mechanic semantics require evidence before entering calculations.
