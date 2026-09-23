# sPg Salvage Eladási Ár / Salvage Selling Price

![sPg Salvage Eladási Ár](docs/images/social-preview.png)

[![Runtime](https://img.shields.io/badge/runtime-V058%20validated-4caf50)](test-artifacts/V058/runtime-summary.json)
[![Coverage](https://img.shields.io/badge/coverage-144%2F144-4caf50)](docs/TESTING.en.md)
[![Feature failures](https://img.shields.io/badge/feature%20failures-0-4caf50)](test-artifacts/V058/runtime-summary.json)
[![Single file](https://img.shields.io/badge/release-single--file%20HTML-14d9ff)](release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html)
[![License](https://img.shields.io/badge/code-MIT-blue)](LICENSE)

**Magyar:** Star Citizen Salvage gazdasági segéd structural salvage → CMAT finomításhoz, kész CMAT közvetlen eladásához és RMC eladáshoz. Dinamikus UEX / SCMDB_DATA / Star Citizen Wiki API adatokat, fail-safe hajó-hozzáférési ellenőrzést, IndexedDB cache-t és közvetlen UEX demand linkeket használ.

**English:** A Star Citizen Salvage economic helper for structural salvage → CMAT refining, direct sale of finished CMAT, and RMC selling. It uses dynamic UEX / SCMDB_DATA / Star Citizen Wiki API data, fail-safe ship-access checks, IndexedDB persistence, and direct UEX demand links.

**Dokumentáció / Documentation:** [Magyar](README.hu.md) · [English](README.en.md)

> **HU:** Nem hivatalos Star Citizen rajongói eszköz; nem áll kapcsolatban a Cloud Imperium vállalatcsoporttal.  
> **EN:** Unofficial Star Citizen fan tool; not affiliated with the Cloud Imperium group of companies.

## Release status

- Current exact runtime-validated release: **V058-SellOnlyDeterministic**
- Runtime coverage: **144/144**, 120 PASS, 24 valid EMPTY, 0 ERROR
- Built-in feature checks: **50**, `featureFailures: []`
- Runtime `errors: []`
- CMAT Sell Only direct-sale semantics: **PASS**
- IndexedDB storage architecture: **PASS**
- Adaptive slim data pipeline: **PASS**
- UEX deep links: **PASS**
- Facility-access evidence: **40 VERIFIED / 19 UNKNOWN / 0 CONFLICT**; UNKNOWN remains fail-safe and is not guessed

See [STATUS.md](STATUS.md) and [docs/RELEASE-NOTES.en.md](docs/RELEASE-NOTES.en.md).

## Release standard

This repository package is prepared under [Universal Professional GitHub Release Master Standard V4.1](docs/RELEASE_STANDARD.md). See the project-specific [Release Contract](docs/RELEASE-CONTRACT.md) and [Release Audit](docs/RELEASE-AUDIT-V4.1.md). The application artifact itself remains byte-identical to the runtime-validated V058 baseline.
