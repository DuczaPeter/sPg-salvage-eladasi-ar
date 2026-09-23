# Privacy / Adatvédelem

## HU

Az alkalmazás saját backend nélkül, a böngészőben fut. A projekt maga nem kér nevet, e-mailt, jelszót vagy Star Citizen account adatot.

A böngésző **IndexedDB** tárhelyét használja a beállítások és a szűkített Salvage Operational Snapshot helyi tárolására. A `localStorage` runtime függőségként nincs használatban; csak régi kulcsok takarítására és diagnosztikára szolgálhat.

Az alkalmazás külső API-kat és weboldalakat ér el. Emiatt az adott szolgáltatók a normál HTTP-kérésekhez tartozó technikai adatokat (például IP-cím, user agent) a saját szabályaik szerint kezelhetik. Külső UEX link megnyitásakor a UEX saját privacy/terms szabályai érvényesek.

## EN

The app runs entirely in the browser with no project-owned backend. It does not request a name, email, password, or Star Citizen account credentials.

Browser **IndexedDB** stores preferences and the slim Salvage Operational Snapshot locally. `localStorage` is not a runtime persistence dependency; it is used only for legacy cleanup/diagnostic purposes where applicable.

The app accesses external APIs and websites. Those providers may process normal request metadata such as IP address and user agent under their own policies. Opening a UEX deep link is subject to UEX's own privacy/terms.
