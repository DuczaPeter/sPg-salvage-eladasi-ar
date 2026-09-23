# Felhasználói útmutató

## CMAT — Finomítás + Eladás

1. Válassz salvage hajót.
2. Írd be a structural salvage nyers SCU mennyiségét.
3. Válaszd a `Finomítás + Eladás` módot.
4. Válassz Dinyx vagy Pyrometric methodot.
5. Állítsd a Felszín/Űr és Top 3/Minden szűrőt.
6. A program a hajó→anyag resolver, recovery, refinery bonus és ship-access szabályokkal rangsorol.

## CMAT — Csak Eladás

1. Válaszd a `Csak Eladás` módot.
2. Az `Eladandó CMAT, SCU` mezőbe a már kész CMAT mennyiséget írd.
3. Hajót nem kell választani.
4. A mennyiség változatlanul kerül a bevételszámításba.
5. Nincs recovery, refining loss, ship material mapping vagy ship access filter.
6. Azonos filterek mellett hajóváltás nem változtathatja meg a CMAT találatok listáját, sorrendjét vagy árát.

## RMC

1. Válassz salvage hajót; az RMC találatok ship-access filtere aktív.
2. Az RMC mennyiség opcionális az árlista megtekintéséhez.
3. Teljes bevételhez adj meg SCU-t.
4. Használd a helyszín- és Top 3/Minden szűrőt.

## UEX demand linkek

A nagy CMAT/RMC cím az általános commodity demand oldalra visz. A találat helyneve a pontos commodity + terminal demand nézetet nyitja meg új lapon.

## UNKNOWN / ATTENTION

UNKNOWN azt jelenti, hogy a szükséges hozzáférési/mechanikai adatot a forrásokból nem lehetett bizonyítani. Az app nem találja ki. Az összesített ATTENTION ettől még lehet release-gate szempontból elfogadható, ha `featureFailures: []`, `errors: []`, és az UNKNOWN helyek fail-safe módon kizáródnak a bizonyítékot igénylő rangsorból.

## Cache

A `Cache törlése` az IndexedDB Salvage Operational Snapshotot és preference adatokat a program szabályai szerint takarítja. Frissítés után a source adatok újra lekérhetők.
