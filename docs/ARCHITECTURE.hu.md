# Architektúra

## Alapelv

A user release egyetlen önálló HTML. A hálózati adatokat runtime tölti le, normalizálja, majd csak a Salvage feladathoz szükséges operational adatot tartja meg.

## Rétegek

1. **Source discovery** – UEX LIVE rendszerek, SCMDB latest build, SC Wiki default version.
2. **Scoped fetch** – location adatok LIVE-system scope-pal; CMAT/RMC commodity árak; SC Wiki csak releváns fallback facilitykre.
3. **Normalization/pruning** – teljes upstream válaszokból csak Salvage-releváns operational sorok maradnak.
4. **Mode boundary** – Refine + Sell, CMAT Sell Only és RMC külön szabályrendszer.
5. **Structural resolver** – csak Refine + Sellnél: selected ship → Rubble/Pieces/Salvage.
6. **Recovery/bonus** – csak Refine + Sellnél; direct audit elsőbbséggel, community fallback provenance-nal.
7. **Access resolver** – Refine + Sell és RMC ship-access döntései; CMAT Sell Only ezt nem használhatja.
8. **Ranking** – Refine + Sell ship-dependent; CMAT Sell Only deterministic ship-independent; RMC ship-access filtered.
9. **UEX deep links** – demand detail delegálva a UEX aktuális commodity/terminal nézetére.
10. **Persistence** – IndexedDB preferences + Salvage Operational Snapshot; localStorage legacy-only.
11. **Diagnostics** – 144 coverage kombináció + feature gate-ek + source fetch/provenance log.

## CMAT Sell Only determinisztikus invariáns

A `cmatSellBySystem()` nem hívhat ship-access filtert, és azonos árú helyek rendezése nem használhat ship-access súlyt. Ez külön runtime és offline release gate-tel védett.

## Fail-safe elv

Normál új source-adat automatikusan bejöhet. Új mechanikai jelentés nem található ki; UNKNOWN/FAIL/ATTENTION marad, amíg nincs bizonyíték.

![Architektúra](images/architecture.png)
