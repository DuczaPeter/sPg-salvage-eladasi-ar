# Data sources and precedence

## UEX API 2.0

Primary source for current prices, terminals, LIVE systems, `vehicles.pad_type`, location `pad_types`, and other operational data.

The app does not retain the full upstream database. Discovery is followed by Salvage-specific pruning.

## SCMDB_DATA

`latest.json` selects the current mining data file. Used for refinery/profile/material-bonus cross-checking. The full dataset is not bundled in the release.

## Star Citizen Wiki API

Secondary/targeted fallback. Instead of full location pagination, only relevant facilities are queried when UEX access evidence is insufficient.

Public-project credit: `api.star-citizen.wiki`.

## Precedence

1. Current direct online field.
2. Versioned audited mapping/evidence.
3. UNKNOWN.

An older secondary source must not override newer direct LIVE evidence.

## Recovery precedence

1. Usable current-LIVE direct UEX refinery audit.
2. Accepted provenance-bound `COMMUNITY_MEASURED` material profile.
3. Legacy `1/6` only for unknown/unmapped future materials.

## Material bonus isolation

- Rubble and Salvage bonuses are tied to their own commodities.
- Pieces never inherits another material's bonus.
- SCMDB CMATS fallback is Salvage-only.

## Future automatic updates

Normal source-data changes are handled by dynamic discovery. New mechanic semantics are never guessed automatically.
