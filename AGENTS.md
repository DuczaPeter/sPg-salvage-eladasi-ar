# AGENTS.md

## Project purpose
Bilingual Star Citizen salvage planning tool comparing CMATS → CMAT refining/sale and direct RMC sale locations across currently LIVE systems.

## Hard technical rules
- Runtime release is a single self-contained HTML file. Do not split HTML/CSS/JS unless the user explicitly requests it.
- Preserve Hungarian + English UI.
- Keep exactly two numeric user amount inputs: gross CMATS SCU and RMC SCU.
- UEX API 2.0 is the primary LIVE source for prices, terminals, vehicles and location access fields.
- SCMDB_DATA is a refinery/profile cross-check/fallback, not a replacement for LIVE UEX pricing.
- Star Citizen Wiki API is structural/secondary validation for commodities, vehicles, explicit Hangar and Landing Pad amenities.
- Never infer a location hangar size from station type, Gateway naming, docking, loading dock or dimensions.
- S/M/L ship: sufficiently sized verified Hangar or Landing Pad is valid.
- XL ship: verified XL Hangar + Docking is mandatory. XL Landing Pad alone is invalid. Dock-only is invalid.
- Unknown or genuine source-conflict locations are excluded from selected-ship ranking.
- Newer UEX LIVE access data may override an older same-minor Wiki disagreement, but the stale disagreement must remain visible in diagnostics.
- Ship required access: UEX vehicles.pad_type is primary. If missing, current public-hangar mapping from verified SC Wiki size_class is a derived requirement only; never present it as verified location hangar data.

## Economic rules
- Refine + Sell requires refinery and CMAT selling safely paired to the same facility.
- Ranking uses expected refined CMAT × CMAT sell price. Gross revenue only; do not silently invent refinery fees.
- Sell Only ranks finished CMAT sale prices.
- RMC ranks direct RMC sale prices.
- CMATS base recovery fallback is 1/6 (16.67%) only while no verified CMATS base audit exists. It must remain explicitly marked unverified.
- Dinyx and Pyrometric are selectable; without method-specific CMATS audit they use the same fallback base recovery.

## UI/UX rules
- Compact dark sPg style.
- System cards for Stanton/Pyro/Nyx are accordions and start collapsed.
- Top 3 and All use the same compact visual language.
- All mode groups equal economic results; refine results only group when price + recovery/bonus economics are equivalent.
- Main highlighted number is total sale value; per-SCU price is secondary below it.
- Controls should size to content on desktop and wrap responsively on smaller screens.
- Diagnostics remain hidden from the normal UI; one “Log másolása / Copy log” action exports the comprehensive JSON diagnostic.

## Testing
- Parse/syntax check JS after modifications.
- Keep 2 numeric inputs and no duplicate HTML IDs.
- For UI/DOM/interaction changes, run a browser test when environment supports it.
- Coverage matrix must continue to test all ship × location filter × result mode × CMAT mode/method combinations.
- Do not claim runtime browser PASS unless it actually ran.

## Release
- Do not overwrite the baseline during takeover.
- No push/tag/release unless explicitly requested.
