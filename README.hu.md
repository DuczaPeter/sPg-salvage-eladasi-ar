# sPg Salvage Eladási Ár

![Projekt borító](docs/images/social-preview.png)

## Mire való?

Az **sPg Salvage Eladási Ár** egy böngészőben futó, egyetlen HTML-fájlból álló Star Citizen Salvage gazdasági segéd. Három külön útvonalat kezel úgy, hogy azok logikája ne folyjon össze:

- **Finomítás + Eladás:** a kiválasztott salvage hajóból meghatározza a structural nyersanyagot, alkalmazza a bizonyított recovery/bonus szabályokat, majd refinery + CMAT eladási útvonalat rangsorol.
- **CMAT Csak Eladás:** a beírt mennyiség már kész CMAT. Nem történik bruttó→nettó átszámítás, recovery vagy hajó-hozzáférési szűrés.
- **RMC eladás:** a kész RMC eladási helyeit rangsorolja, a kiválasztott salvage hajó igazolt hozzáférésével szűrve.

A demandot nem másoljuk be külön, gyorsan elavuló modellként: a címek és találati helyek közvetlenül a megfelelő UEX demand nézetre visznek.

## Mi változott V056–V058 között?

**V056 – Sell Only Direct CMAT:** a Csak Eladás mód a megadott CMAT SCU-t változtatás nélkül használja; recovery és refining loss csak Finomítás + Eladásnál létezik.

**V057 – Sell Only Ship Independent:** a kész CMAT eladása nem igényel salvage hajót, és a hajóválasztás nem szűrheti a CMAT eladási helyeket. A Finomítás + Eladás továbbra is hajókötelezett; RMC továbbra is hajó-hozzáférés szerint szűr.

**V058 – Sell Only Deterministic:** azonos árú CMAT helyek tie-break rendezése sem használhat hajó-hozzáférési súlyt, ezért a Csak Eladás teljes listája, sorrendje és ára minden hajóválasztásnál azonos.

## Fő funkciók

- HU / EN felület.
- Finomítás + Eladásnál kötelező salvage-hajó választás.
- CMAT Csak Eladásnál a hajó nem szükséges és nem befolyásolhatja a találatokat.
- RMC-nél a kiválasztott salvage hajó továbbra is hozzáférési szűrő.
- Hajó → structural material resolver:
  - RSI Salvation → Construction Rubble
  - Drake Vulture → Construction Rubble
  - MISC Fortune → Construction Rubble
  - ARGO MOTH → Construction Pieces
  - Aegis Reclaimer → Construction Salvage
- Elfogadott, provenance-kötött community recovery, ha nincs használható current-LIVE direkt audit: Rubble 40%, Pieces 20%, Salvage 15,2%.
- Anyagonként izolált bonus: Rubble Levski +9%, Pieces nincs külön explicit bonus, Salvage Levski +8%, csak ahol a forrás ezt igazolja.
- Dinyx / Pyrometric választás; külön recovery eltérést csak direkt aktuális audit bizonyíthat.
- Top 3 / Minden találat, Felszín / Űr szűrés.
- S/M/L hajónál igazolt megfelelő hangár vagy landing pad elfogadható; XL-nél csak igazolt XL hangár + docking együtt.
- UEX LIVE rendszerek automatikus runtime felfedezése.
- SCMDB `latest.json` buildkövetés.
- Star Citizen Wiki célzott fallback, teljes location mirror nélkül.
- IndexedDB-only runtime persistence; localStorage nem runtime függőség.
- Kis **Salvage Operational Snapshot** cache, nem teljes upstream adatdump.
- Kattintható CMAT/RMC címek és konkrét terminal UEX demand deep linkek.
- Beépített diagnosztika és regressziós feature gate-ek.

![Architektúra](docs/images/architecture.png)

## Használat

### Finomítás + Eladás

1. Válassz salvage hajót.
2. Add meg a nyers structural salvage SCU-t.
3. Válassz Dinyx vagy Pyrometric methodot.
4. Szűrj helyszínre és Top 3 / Minden találatra.
5. A program a hajóhoz tartozó Rubble/Pieces/Salvage recovery és access szabályokkal rangsorol.

### CMAT Csak Eladás

1. Válaszd a **Csak Eladás** módot.
2. Írd be a nálad lévő kész CMAT mennyiségét az **Eladandó CMAT, SCU** mezőbe.
3. Nem kell hajót választani.
4. A program a teljes megadott mennyiséggel számol; nincs recovery, refining loss vagy hajófüggő szűrés/rendezés.

### RMC

1. Válassz salvage hajót, mert az RMC találatoknál a hozzáférési szűrés aktív.
2. Az RMC SCU opcionális az árlista megtekintéséhez; teljes bevételhez add meg.
3. Használd ugyanazt a helyszín- és találatszűrést.

A **Construction Materia CMAT** és **Recycled Material Composite RMC** címek általános UEX demand oldalra visznek. Egy találati hely neve a konkrét commodity + terminal demand nézetet nyitja meg.

![Felhasználói folyamat](docs/images/workflow.png)

## Adatforrások és precedence

**UEX API 2.0:** aktuális árak, terminálok, LIVE rendszerek, jármű `pad_type`, location `pad_types` és más közvetlen működési mezők.

**SCMDB_DATA:** `latest.json` alapján aktuális mining/refinery build és cross-check.

**Star Citizen Wiki API:** célzott secondary/fallback validáció, főleg access és commodity/vehicle relációkhoz. Régebbi secondary adat nem írhatja felül a frissebb direkt LIVE bizonyítékot.

**Recovery precedence:** usable current-LIVE direct audit → provenance-kötött `COMMUNITY_MEASURED` → legacy 1/6 csak UNKNOWN/unmapped jövőbeli materialra.

Részletesen: [docs/DATA-SOURCES.hu.md](docs/DATA-SOURCES.hu.md)

## Automatikus patchkövetés

A program nem egyetlen patchre van befagyasztva. Runtime fedezi fel a LIVE rendszereket, az SCMDB aktuális buildet és a SC Wiki default verzióját. Normál adatváltozás, új ár, terminál, refinery vagy LIVE rendszer kódmódosítás nélkül be tud kerülni.

Új mechanikai szemantika viszont nem található ki. Új structural material vagy bizonyítatlan hajó→anyag kapcsolat esetén UNKNOWN/FAIL szükséges, amíg nincs bizonyíték.

## V058 runtime validáció

A felhasználói V058 logban 144/144 coverage check lefutott: 120 PASS, 24 szabályos EMPTY, 0 ERROR. A 50 feature checkből nincs failure, és a runtime `errors` tömb üres. A CMAT Sell Only közvetlen mennyiség, recovery-mentesség, hajófüggetlen lista és hajófüggetlen tie-break sorrend mind PASS.

Az összesített `ATTENTION` kizárólag azért marad, mert 59 releváns facilityből 19 access adata forrásból nem bizonyítható. Ezeket a program UNKNOWN-ként kezeli és nem találja ki.

![Validáció](docs/images/validation-status.png)

## Single-file release

A felhasználói kiadás továbbra is egyetlen önálló HTML. A repository dokumentációja, CI-je, tesztartifactjai és képei nem szükségesek az app futtatásához.

## Licenc és jogi helyzet

A saját projektkód és saját dokumentáció MIT licencű, ahol nincs külön eltérés. Ez nem licenceli újra a Star Citizen/CIG/RSI IP-t, UEX adatot/szolgáltatást, Star Citizen Wiki tartalmat, SCMDB_DATA adatot vagy közösségi forrásokat. Az app látható kétnyelvű unofficial fan-tool notice-t tartalmaz.

Lásd: [LICENSE](LICENSE), [NOTICE.md](NOTICE.md), [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), [docs/LEGAL.hu.md](docs/LEGAL.hu.md).

## Fejlesztés / Codex

A fejlesztési baseline maga a runtime-validált V058 `index.html`. Codex vagy más fejlesztő először az [AGENTS.md](AGENTS.md) és [STATUS.md](STATUS.md) fájlt olvassa. A jelenlegi Sell Only invariánsokat új bizonyíték vagy kifejezett scope nélkül nem szabad újranyitni.

Offline release gate:

```bash
node tools/check-release.mjs
```
