# Roadmap és lezárt döntések

## Lezárt: demand

Nincs külön demand engine. A CMAT/RMC címek és találati helyek közvetlen UEX demand linkek. Ezt csak új, explicit scope nyithatja újra.

## Lezárt: CMAT Sell Only szemantika

Sell Only = kész CMAT közvetlen eladása. Nincs recovery, refining loss, hajókötelezettség, ship-access filter vagy ship-dependent ordering. A V058 runtime teszt ezt minden canonical salvage hajóval és no-ship baseline-nal ellenőrzi.

## Következő ésszerű funkcionális fejlesztés

**Refinery cost + time**, kizárólag aktuális, használható audit esetén. Ha nincs megbízható adat, maradjon UNKNOWN/not available.

## További bizonyítékot igényel

- Whole-SCU boxed output kerekítés.
- Raw Rubble/Pieces/Salvage közvetlen értékesítés.
- Salvage depot/cargo-grid/fracture limits mint opcionális információ.
- Component removal, powered-ship fracture, legality/CrimeStat: valós gameplay, de jelen gazdasági scope-on kívül.

## Patch-elv

Normál source-adat automatikusan jöhet. Új mechanikai szemantika csak bizonyíték után kerülhet számításba.
