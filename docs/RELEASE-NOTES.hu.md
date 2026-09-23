# V058 release notes — Magyar

A V058 a CMAT **Csak Eladás** ág végleges leválasztása a hajófüggő Finomítás + Eladás logikáról.

**V056:** kész CMAT mennyiség közvetlenül, recovery nélkül.  
**V057:** nincs hajókötelezettség és nincs hajó-access szűrés Sell Onlyban.  
**V058:** még az azonos árú találatok tie-break sorrendje sem lehet hajófüggő.

A felhasználói runtime logban a Sell Only teljes feature blokk PASS; minden salvage hajó és a no-ship baseline ugyanazt a CMAT listát/sorrendet adja. A teljes diagnosztika 144/144 coverage, 50 feature check, 0 feature failure és 0 runtime error.

Az access audit ATTENTION továbbra is csak source completeness jelzés: 40 VERIFIED, 19 UNKNOWN, 0 CONFLICT.

## 2026-09-23 – Release Standard V4.1 package revision

Az alkalmazás verziója nem változik: továbbra is V058-SellOnlyDeterministic. A csomag új V4.1 release-szabványt, Release Contractot, release-auditot, kibővített static gate-et, secret-cleanliness ellenőrzést, friss manifest/inventory/checksum réteget kap. Runtime kód nem változott.
