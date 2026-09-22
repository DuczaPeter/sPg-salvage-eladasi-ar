# Architektúra

## Alapelv

Az app felhasználói kiadása egyetlen HTML-fájl. A hálózati adatokat runtime tölti le, feldolgozza, majd csak a Salvage feladathoz szükséges szűkített adatot tartja meg.

## Rétegek

1. **Forrásfelfedezés** – UEX LIVE rendszerek, SCMDB latest build, SC Wiki default version.
2. **Szűkített lekérés** – a helyadatok LIVE-system scope-pal; commodity árak CMAT/RMC szerint; SC Wiki csak releváns fallback facilitykre.
3. **Normalizálás** – egységes system/facility/terminal/ship/commodity struktúrák.
4. **Salvage resolver** – kiválasztott hajó → structural material.
5. **Recovery modell** – aktuális direkt audit, ennek hiányában provenance-kötött community model, végső ismeretlen esetben legacy fallback csak UNKNOWN/unmapped materialra.
6. **Access resolver** – ship required access és facility access külön bizonyítékokból.
7. **Ranking** – CMAT refine+sell / sell-only és RMC listák, rendszer szerinti rangsor.
8. **UEX deep link** – a demand részletei a UEX-re vannak delegálva.
9. **Persistence** – IndexedDB-ben kis Salvage Operational Snapshot és preferences.
10. **Diagnostics** – coverage matrix + feature gates + source fetch log + provenance.

## Fail-safe elv

Ha egy új patch adatot ad hozzá, azt a dinamikus pipeline felveszi. Ha egy új mechanika jelentése nem bizonyítható, a program nem találja ki: UNKNOWN/FAIL/ATTENTION állapot marad.

![Architektúra](images/architecture.png)
