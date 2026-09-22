# Felhasználói útmutató

## CMAT

1. Válassz salvage hajót.
2. Írd be a finomítás előtti structural salvage mennyiséget SCU-ban.
3. Válassz `Finomítás + Eladás` vagy `Csak Eladás` módot.
4. Finomításnál válassz Dinyx vagy Pyrometric methodot.
5. Szűrj helyszínre, majd Top 3 / Minden találat szerint.
6. A nagy CMAT cím UEX demand oldalra visz.
7. A találat helyneve a konkrét UEX terminal demand nézetre visz.

## RMC

1. Az RMC mennyiség opcionális az árlista megtekintéséhez.
2. Teljes bevételhez adj meg SCU-t.
3. Használd ugyanazt a helyszín- és találatszűrést.
4. A nagy RMC cím és a helynevek UEX demand oldalakra mutatnak.

## Mit jelent az UNKNOWN?

A program nem tudta forrásból bizonyítani az adott hozzáférési/mechanikai adatot. Nem hibásan kitalálja, hanem biztonságosan kizárja abból a döntésből, ahol bizonyíték kell.

## Cache

A `Cache törlése` a helyi IndexedDB snapshotot és preference adatokat takarítja a program szabályai szerint. Frissítéskor a program újra lekéri az aktuális source adatokat.
