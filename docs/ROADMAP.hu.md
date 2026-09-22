# Roadmap és tudatosan nyitva hagyott részek

## Lezárt döntés: demand

Nem építünk külön demand-motort. A kalkulátor kiválasztja a releváns helyet, a felhasználó pedig közvetlen UEX commodity/terminal demand linket kap. Így a demand mindig a UEX aktuális nézetében marad.

## Következő ésszerű funkcionális fejlesztés

**Refinery cost + time**, de csak ott, ahol aktuális és használható audit bizonyítja. Ha nincs megbízható adat, a program ne találjon ki költséget vagy időt.

## Tudatosan nem aktív / további bizonyíték kell

- Boxed output egész-SCU kerekítés: közösségi megfigyelés van, de nem elég erős automatikus főszámításhoz.
- Raw Rubble/Pieces/Salvage közvetlen értékesítés: patch- és helyfüggő, jelenleg nincs stabil bizonyíték a fő modellhez.
- Salvage depot/cargo grid/fracture mérethatár: hasznos információ lehet, de nem szükséges az eladási ár alapképlethez.
- Component removal, powered-ship fracture, legality/CrimeStat: valós gameplay mechanika, de a jelenlegi gazdasági kalkulátor scope-ján kívül van.

## Jövőbeli patch elv

Normál forrásadat változás automatikusan jöhet. Új mechanikai jelentés csak bizonyíték után kerülhet a kalkulációba.
