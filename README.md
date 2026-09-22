# sPg Salvage Eladási Ár / Salvage Selling Price

![sPg Salvage Eladási Ár](docs/images/social-preview.png)

[![Static Check](https://img.shields.io/badge/static%20check-PASS-4caf50)](test-artifacts/V055/static-check.json)
[![Runtime Baseline](https://img.shields.io/badge/runtime%20baseline-V054-14d9ff)](test-artifacts/V054/runtime-summary.json)
[![Single File](https://img.shields.io/badge/release-single--file%20HTML-14d9ff)](release/sPg_salvage_eladasi_ar_V055_GitHubRelease.html)
[![License](https://img.shields.io/badge/code-MIT-blue)](LICENSE)

**Magyar:** Star Citizen Salvage segéd, amely a structural salvage → CMAT finomítást és az RMC eladást kezeli, dinamikus UEX / SCMDB_DATA / Star Citizen Wiki API adatokkal, hajó-hozzáférési ellenőrzéssel és közvetlen UEX demand linkekkel.

**English:** A Star Citizen Salvage helper for structural salvage → CMAT refining and RMC selling, using dynamic UEX / SCMDB_DATA / Star Citizen Wiki API data, ship-access checks, and direct UEX demand links.

**Dokumentáció / Documentation:** [Magyar README](README.hu.md) · [English README](README.en.md)

> **HU:** Nem hivatalos Star Citizen rajongói eszköz; nem áll kapcsolatban a Cloud Imperium vállalatcsoporttal.  
> **EN:** Unofficial Star Citizen fan tool; not affiliated with the Cloud Imperium group of companies.

## Quick status / Gyors állapot

- Functional runtime baseline: **V054-UEXDeepLinks**
- GitHub package release: **V055-GitHubRelease**
- V054 runtime coverage: **144/144 executed, 120 PASS, 24 valid EMPTY, 0 ERROR**
- Feature checks: **42**, `featureFailures: []`
- Storage: **IndexedDB-only runtime persistence PASS**
- Adaptive slim pipeline: **PASS**
- UEX deep links: **PASS**
- V055 business/calculation logic: **unchanged from V054**

See: [STATUS.md](STATUS.md)
