# sPg Salvage Selling Price

![Project cover](docs/images/social-preview.png)

## What is it for?

**sPg Salvage Selling Price** is a browser-based, single-file Star Citizen helper. It deliberately focuses on the two economic Salvage paths that need fast, auditable decisions:

- **Structural salvage → CMAT:** the selected salvage ship automatically resolves the raw structural material, applies the corresponding recovery model, then compares refining and selling locations.
- **RMC selling:** current sale locations are ranked per system.
- **Demand:** demand is not duplicated into a second local model. CMAT/RMC headings and result locations link directly to the relevant UEX demand pages.

## Core features

- HU / EN UI.
- Mandatory salvage-ship selection; no user-facing “all ships” calculation path.
- Ship → structural material resolver:
  - RSI Salvation → Construction Rubble
  - Drake Vulture → Construction Rubble
  - MISC Fortune → Construction Rubble
  - ARGO MOTH → Construction Pieces
  - Aegis Reclaimer → Construction Salvage
- Accepted provenance-bound community recovery baselines when no usable current direct audit exists:
  - Rubble: 40%
  - Pieces: 20%
  - Salvage: 15.2%
- Material-isolated refinery bonuses:
  - Rubble: Levski +9% where explicitly supported
  - Pieces: no explicit dedicated bonus
  - Salvage: Levski +8%
- Dinyx / Pyrometric selection. A method-specific recovery delta is accepted only when a direct current audit proves it.
- Refine + Sell / Sell Only.
- Top 3 / All results.
- Surface / Space filter.
- Ship size and facility access are handled separately.
- XL ships require **verified XL hangar + docking**.
- Dynamic discovery of current UEX LIVE systems.
- SCMDB build tracking through `latest.json`.
- Targeted Star Citizen Wiki fallback calls instead of mirroring the full locations database.
- IndexedDB-only runtime persistence; localStorage is legacy cleanup/diagnostic only.
- Large upstream datasets are filtered into a small **Salvage Operational Snapshot** before persistence.
- Diagnostic log plus built-in regression feature gates.

![Architecture](docs/images/architecture.png)

## Usage

1. Open `index.html` or the GitHub Pages deployment.
2. Wait for current source data to load.
3. Select the salvage ship.
4. For CMAT, enter raw SCU before refining. For RMC, SCU is optional unless total revenue is needed.
5. Select mode, refining method, location filter and Top 3 / All results.
6. Click **Construction Materia CMAT** or **Recycled Material Composite RMC** for the general UEX demand page.
7. Click a result location name for the exact commodity + terminal UEX demand view.

![User flow](docs/images/workflow.png)

## Data sources and trust model

**Primary/current direct data:** UEX API 2.0 for prices, terminals, LIVE systems, vehicle `pad_type`, location `pad_types`, and other current operational data.

**Cross-check/refinery data:** SCMDB_DATA, with the current mining file selected from `latest.json`.

**Targeted fallback/secondary validation:** Star Citizen Wiki API. The app no longer crawls the full location dataset; it queries only relevant facilities when necessary.

**Recovery:** when no usable current direct audit exists, the app uses the documented `COMMUNITY_MEASURED` model and never presents it as an official CIG number.

Details: [docs/DATA-SOURCES.en.md](docs/DATA-SOURCES.en.md)

## Automatic patch tracking

The code is not frozen to 4.10.1. LIVE systems, the SCMDB build and the Star Citizen Wiki default version are discovered at runtime. Normal additions such as new prices, terminals, refineries and LIVE systems can flow in without patch-by-patch rewrites.

If a patch introduces a genuinely new Salvage mechanic, structural material, or an unproven ship→material relationship, the app must surface **UNKNOWN/FAIL** rather than inventing a rule.

## Diagnostics

The validated V054 user runtime log reports:

- 144/144 coverage checks executed.
- 120 PASS.
- 24 valid EMPTY.
- 0 ERROR.
- 42 feature checks.
- `featureFailures: []`.
- storage architecture PASS.
- adaptive slim pipeline PASS.
- UEX deep links PASS.

The remaining `ATTENTION` state is intentionally used where facility access cannot be proven from source evidence.

![Validation](docs/images/validation-status.png)

## Single-file rule

The user release remains **one standalone HTML file**. The repository may contain documentation, CI and test artifacts, but the app itself does not require them.

## License and legal status

Original project code is provided under the MIT license in `LICENSE`. That license does **not** grant rights to third-party trademarks, datasets, APIs, or content.

Star Citizen, UEX, Star Citizen Wiki, SCMDB_DATA and community-source material remain subject to their respective rights and terms. Treat the integrated project as a non-commercial Star Citizen fan tool. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) and [docs/LEGAL.en.md](docs/LEGAL.en.md).

## Development

Start here for Codex or another developer:

- `AGENTS.md` – mandatory development and safety rules.
- `STATUS.md` – current baseline and evidence.
- `docs/ARCHITECTURE.en.md` – architecture.
- `docs/TESTING.en.md` – test contract.
- `tools/check-release.mjs` – offline static release gate.

Quick check:

```bash
node tools/check-release.mjs
```
