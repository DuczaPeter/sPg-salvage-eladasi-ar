# UNIVERSAL PROFESSIONAL GITHUB RELEASE MASTER STANDARD

**Standard version:** V4.1  
**Standard updated:** 2026-09-23  
**Recommended canonical path:** `docs/RELEASE_STANDARD.md`

Technikai + dokumentációs + vizuális + jogi + validációs + AI/Codex-folytathatósági szabvány.

## 0. Cél

Ha egy projektből profi GitHub release, GitHubra feltölthető projektcsomag vagy publikálható repository készül, ezt a szabványt kell alkalmazni. A szabvány technológiától és projekttípustól független. A cél nem a legtöbb fájl, hanem egy működő, ellenőrizhető, jól dokumentált, vizuálisan igényes, jogilag rendezett, regresszióktól védett, hosszú távon karbantartható és más fejlesztő vagy AI által biztonságosan folytatható projekt.

## 1. Minőségi szabvány, nem merev fájllista

Először értsd meg a projekt célját, célközönségét, architektúráját, main artifactját, canonical baseline-ját, kritikus invariánsait, regressziós veszélyeit, külső függőségeit, jogi környezetét és vizuális identitását. Csak releváns elemeket készíts. Valóban nem releváns elem lehet indokolt `N/A`; releváns, de el nem készült elem nem nevezhető `N/A`-nak.

## 2. Release standard elhelyezése

Projektlokális canonical hely: `docs/RELEASE_STANDARD.md`. A fájl elején szerepeljen a standard verziója és lehetőség szerint a frissítés dátuma. A repository saját példánya verziórögzített project artifact; a master későbbi frissítése nem írja felül automatikusan.

## 3. Utasítási prioritás

1. Aktuális, explicit felhasználói utasítás, a Release Contractban dokumentált `DEVIATION`-nel, ha eltér a projekt standardjától.
2. Projektlokális `docs/RELEASE_STANDARD.md`.
3. Elérhető és releváns release skill.
4. Általános fallback release-szabályok.

Az explicit utasítás nem módosítja észrevétlenül a tartós projektszabványt.

## 4. Explicit eltérés és gate-védelem

OPTIONAL elem elhagyható dokumentált `DEVIATION`-nel. Már REQUIRED gate kihagyását a deviation nem teszi `DONE`-ná. Nem teljesített REQUIRED gate `BLOCKED`; a release `BLOCKED`, vagy kizárólag hiányzó kötelező runtime evidence esetén `STATICALLY VERIFIED ONLY`. `READY WITH LIMITATIONS` csak akkor lehetséges, ha minden REQUIRED gate teljesült. A fix minimum gate-ek publikus release esetén deviationnel nem kerülhetők meg. A `CREDENTIAL / SECRET CLEANLINESS` gate nem hagyható el és nem írható felül.

## 5. Aktiválási szabály

A teljes release workflow csak GitHub release, teljes GitHub package, release preparation, repository publication vagy egyértelműen egyenértékű kéréskor aktiválódjon. Normál fejlesztésnél, hibajavításnál, kisebb UI/adat/feature módosításnál ne töltődjön be automatikusan.

## 6. AGENTS.md hivatkozás

Az AGENTS.md csak röviden hivatkozzon a `docs/RELEASE_STANDARD.md` fájlra. A teljes standardot ne másold bele. Dedikált skill segítheti a végrehajtást, de a projektlokális standard a tartós authoritative forrás, kivéve az aktuális explicit felhasználói felülírást.

## 7. Release Contract – munka előtt kötelező

Release-fájlok módosítása/létrehozása előtt rögzítsd legalább: `PROJECT TYPE`, `PRIMARY LANGUAGE`, `CANONICAL BASELINE`, `MAIN ARTIFACT`, `TARGET VERSION`, `PUBLIC RELEASE`, `RUNTIME VALIDATION REQUIRED + reason`, `PACKAGE/ZIP REQUIRED`, `LICENSE STATUS`, `REQUIRED GATES`, `OPTIONAL GATES`, `RELEVANT VISUAL ASSETS`, `N/A ELEMENTS + reason`, `DEVIATIONS`. Gate-besorolás később csak dokumentált indokkal változhat.

## 8. Fix minimum release gate-ek

Minden normál publikus release minimum REQUIRED gate-je:

1. `CANONICAL BASELINE IDENTIFIED`
2. `MAIN ARTIFACT IDENTIFIED`
3. `STATIC VALIDATION`
4. `CREDENTIAL / SECRET CLEANLINESS`
5. `LICENSE STATUS RESOLVED`
6. `VERSION CONSISTENCY`

Ezek nem tehetők OPTIONAL-ra vagy `N/A`-ra. További projektfüggő REQUIRED gate lehet runtime/browser/integration validation, regression suite, single-file parity, data-source validation, visual validation, package validation, platform/API compatibility.

## 9. Canonical baseline

A canonical baseline a legutolsó ténylegesen működő és lehetőség szerint runtime-validált verzió. Ne generáld újra feleslegesen. Dokumentációs, grafikai, metadata-, CI-, licenc-, manifest- vagy csomagolási munka során a validált alkalmazást lehetőleg byte-pontosan őrizd meg. Ne változtass indokolatlanul üzleti logikát, algoritmust, UI-viselkedést, storage/cache rendszert, adatforrás- vagy számítási logikát.

## 10. Baseline byte-parity

Ha a main artifactnak változatlannak kell maradnia, SHA-256 hash-összevetéssel bizonyítsd. Elvárt byte-identitásnál eltérés = `FAIL`. Szándékosan változó artifactnál a byte-parity lehet indokolt `N/A`, és az új artifact kapjon saját végleges SHA-256 hash-t.

## 11. Négy külön állapotrendszer

**Evidence Level:** `SOURCE VERIFIED`, `STATIC VERIFIED`, `RUNTIME VERIFIED`, `INTEGRATION VERIFIED`, `NOT VERIFIED`.

**Test Result:** `PASS`, `EMPTY`, `UNKNOWN`, `ATTENTION`, `FAIL`, `ERROR`.

**Checklist/Gate Status:** `DONE`, `N/A`, `BLOCKED` + külön `REQUIRED: YES/NO`.

**Release Status:** `READY`, `READY WITH LIMITATIONS`, `STATICALLY VERIFIED ONLY`, `BLOCKED`.

Ezeket nem szabad összekeverni.

## 12. Test Result jelentések

`PASS`: az elvárt működés bizonyítottan megfelelő. `EMPTY`: nincs eredmény, de specifikáció szerint elfogadott. `UNKNOWN`: nincs elég adat. `ATTENTION`: működés nem hibás, de ismert korlát van. `FAIL`: elvárt invariáns sérült. `ERROR`: technikai végrehajtási/feldolgozási hiba.

## 13. Checklist / gate státusz és REQUIRED N/A

`DONE`: ténylegesen elkészült. `N/A`: csak akkor, ha a projekt természetéből fakadóan valóban nem alkalmazható; nem használható azért, mert nehéz, nincs eszköz/idő, nem sikerült vagy túl sok munka. Minden N/A indoklást igényel. `BLOCKED`: releváns, de nem teljesíthető; REQUIRED BLOCKED release-t blokkol, OPTIONAL BLOCKED limitation.

Egy REQUIRED gate akkor számít teljesültnek, ha `DONE` vagy valóban indokolt és dokumentált `N/A`. A FIX MINIMUM RELEASE GATE-ek nem lehetnek N/A.

## 14. REQUIRED UNKNOWN / NOT VERIFIED

Ha REQUIRED gate eredménye `UNKNOWN`, vagy a szükséges evidence `NOT VERIFIED`, a release blokkolt. Kötelező gate ilyen állapota nem nevezhető pusztán limitationnek.

## 15. Release status szigorú definíciója

`READY`: minden REQUIRED gate teljesült; fix minimum gate-ek ténylegesen teljesültek; minden alkalmazható REQUIRED teszt PASS vagy elfogadott EMPTY; nincs REQUIRED FAIL/ERROR/UNKNOWN/NOT VERIFIED/BLOCKED; nincs nyitott release-releváns ATTENTION, OPTIONAL BLOCKED vagy más limitation.

`READY WITH LIMITATIONS`: minden REQUIRED gate teljesült, de maradt dokumentált, nem blokkoló ATTENTION, opcionális UNKNOWN, OPTIONAL BLOCKED, külső adatforrási korlát vagy más nem release-kritikus limitation.

`STATICALLY VERIFIED ONLY`: a `BLOCKED` speciális informatív alesete. Csak akkor, ha minden REQUIRED gate a runtime/runtime-browser bizonyításon kívül teljesült, és az egyetlen blokkoló ok a kötelező runtime evidence hiánya. Jelentése: `BLOCKED: missing required runtime evidence`. Nem publikus release-ready.

`BLOCKED`: bármely REQUIRED gate FAIL/ERROR/UNKNOWN/NOT VERIFIED/BLOCKED, kivéve a fenti szűk `STATICALLY VERIFIED ONLY` esetet.

## 16. Fail-safe alapelv

Ne találj ki adatot, tesztet, jogi megfelelést, licencet vagy runtime eredményt. Használj UNKNOWN/ATTENTION/NOT VERIFIED/BLOCKED állapotot. Mockupot ne nevezd screenshotnak; generált képet ne nevezd runtime evidence-nek.

## 17. Repository felépítés

A projekthez igazítva lehet például `README*`, `CHANGELOG.md`, `CONTRIBUTING.md`, `SECURITY.md`, `PRIVACY.md`, `LICENSE`, `NOTICE.md`, `THIRD_PARTY_NOTICES.md`, `AGENTS.md`, `STATUS.md`, `VERSION.json`, `/release`, `/docs`, `/assets`, `/tools`, `/test-artifacts`, `/.github`. Csak valós funkciójú elemek készüljenek.

## 18. Main artifact

A fő használható artifact legyen egyértelműen azonosítható és README-ből megtalálható.

## 19. Single-file projektek

Ha a projekt single-file követelményű, maradjon single-file. Ne bontsd szét CSS/JS/template/data/config fájlokra csak a „profibb” látszat kedvéért.

## 20. README stratégia

A `README.md` legyen teljes értékű landing page a projekt elsődleges nyelvén, ne üres nyelvválasztó. Többnyelvű projektben legyen kölcsönös link az alternatív nyelvi README-kre. Tartalmazzon célt, fő funkciókat, release-t, main artifactot, használatot, követelményeket, adatforrásokat, validációt, korlátokat, licenc/third-party információt és dokumentációs linkeket.

## 21. Kétnyelvű paritás

Fontos felhasználói dokumentáció több nyelven tartalmilag legyen egyenértékű. Ne legyen egyik részletes, a másik félkész/elavult; ne térjen el feature-, limitation-, verzió- vagy jogi információ.

## 22. Technikai dokumentáció

Projektfüggően: USER GUIDE, ARCHITECTURE, DATA SOURCES, TESTING, RELEASE, KNOWN LIMITATIONS, ROADMAP, RELEASE NOTES. Ne készíts külön fájlt, ha csak a README-t ismételné.

## 23. User Guide

Dokumentálja a használatot, főképernyőt, mezőket/gombokat, workflow-t, példákat, hibaüzeneteket, edge case-eket és tipikus félreértéseket, ha releváns.

## 24. Architecture

Dokumentálja a fő komponenseket, rétegeket, adatfolyamot, business logicot, UI-t, storage/cache-t, API-kat, fallbacket, validationt, diagnosticsot, invariánsokat és fontos mérnöki döntéseket.

## 25. Data Sources

Minden jelentős külső forrásnál: név, hivatalos URL/API/repository, felhasználás, adatok, precedence, version discovery, freshness, fallback, cache, hiányosságok.

## 26. Source precedence

Több forrásnál dokumentáld a projekt saját prioritását. Tipikus minta: current direct authoritative > primary API > secondary API > versioned repository > verified fallback > community evidence > legacy fallback > UNKNOWN.

## 27. Dinamikus adatforrások

Ha a projekt dinamikus verzió/build/API/system/location/source discoveryt használ, release során őrizd meg. Ne cseréld hardcoded aktuális értékekre. Dokumentáld a discoveryt, fallbacket, schema-break viselkedést és manuálisan frissítendő részeket.

## 28. Külső adat újracsomagolása

Ne csomagolj automatikusan teljes harmadik fél adatbázist/dumpot, különösen ismeretlen redisztribúciós jog vagy licenc esetén. `LICENSE STATUS = UNKNOWN` mellett ne másold a teljes adatforrást; dokumentáld külső függőségként és hivatkozz az eredetire. Jogilag bizonytalan adatot ne tegyél saját projektlicenc alá.

## 29. Regresszióvédelem

Minden fontos bugfix és kritikus új feature kapjon célzott regressziós ellenőrzést. A diagnosztika fejlődjön együtt a programmal.

## 30. Release gate automatizálás

Ha lehetséges, legyen `tools/check-release.*`, amely ellenőrzi a main artifactot, syntax/parse-t, version consistencyt, invariánsokat, duplicate ID-kat, single-file követelményt, dokumentációt, regressziós markereket, secret cleanliness-t, manifestet és releváns vizuális asseteket. Statikus gate nem nevezhető runtime tesztnek.

## 31. CI / GitHub Actions

Ha releváns, legyen CI. Világosan különítse el a STATIC, RUNTIME és INTEGRATION teszteket.

## 32. Test evidence

Valódi evidence kerüljön `test-artifacts/` alá, pl. runtime log, validation summary, release-gate summary, screenshotok. A rövid summary ne helyettesítse a nyers evidence-et.

## 33. Changelog és Release Notes

Verziózott projektnél legyen changelog. Komoly bugfixnél: hiba, ok, javítás, regressziós védelem. Az aktuális release kapjon érthető összefoglalót.

## 34. AGENTS.md

Röviden tartalmazza a projekt célt, canonical baseline-t, main artifactot, authoritative fájlokat, invariánsokat, source precedence-t, storage/cache policy-t, required release gate-eket, testing policy-t, tiltott regressziókat, docs-frissítési szabályt és a `docs/RELEASE_STANDARD.md` hivatkozást. Ne tartalmazza a teljes standardot.

## 35. STATUS.md

Legyen rövid és aktuális: current version, baseline, latest validated artifact/evidence, release status, ATTENTION/UNKNOWN/BLOCKED, next task, NOT STARTED, jóváhagyást igénylő scope.

## 36. AI / Codex folytathatóság

Ha elérhető, használj releváns projekt-specifikus skilleket. Codexnél `$credit-efficient-project-runner` meglévő projektre, `$uj-projekt` csak új/indokolt inicializálásra. Más környezetben azonos elveket kövess az ottani eszközökkel.

## 37. AI / Codex Task Contract

Komoly handoff: BASELINE, SCOPE, DO NOT TOUCH, REQUIRED GATES, ACCEPTANCE CRITERIA, TARGETED TESTS, STOP CONDITION. Dirty/WIP őrzendő; reset, force overwrite és unrelated cleanup külön jóváhagyás nélkül tilos.

## 38. Licenc

AI ne válasszon önállóan licencet. Meglévő licencet őrizd meg; tulajdonos által megadottat használd; eldöntetlen licencnél kérdezz rá. Autonóm futásban `LICENSE GATE = BLOCKED`; nem destruktív audit/docs munka folytatható, publikus READY nem adható.

## 39. Third-party és jogi dokumentáció

Ha releváns: LICENSE, NOTICE, THIRD_PARTY_NOTICES, PRIVACY, SECURITY. Third-party forrásnál dokumentáld a nevet, forrást, felhasználást, licenc/Terms státuszt, attributiont, redisztribúciót és korlátozásokat. Ismeretlen: `LICENSE STATUS: UNKNOWN`.

## 40. Fan / trademark disclaimer

Fan/trademark projekt esetén legyen megfelelő unofficial/fan disclaimer, ha szükséges. Ne állíts hivatalos kapcsolatot, partnerséget vagy jóváhagyást bizonyíték nélkül.

## 41. Vizuális jogtisztaság

Engedély nélkül ne használj stock fotót, third-party logót, proprietary ikonkészletet, játékassetet, külső illusztrációt vagy jogvédett marketingképet. Preferáld saját diagramot/screenshotot/generált projektgrafikát vagy egyértelműen licencelt assetet. Third-party vizuális elem jogi státuszát dokumentáld.

## 42. Privacy

Csak tényleges működést dokumentálj: localStorage, IndexedDB, cookies, cache, API hívások, analytics, backend, login/account, feltöltött fájlok, helyi adattörlés.

## 43. Security

Ha releváns, dokumentáld a vulnerability reportingot, érzékeny adatokat, külső függőségeket és hogy mit ne küldjenek publikus issue-ban.

## 44. Contributing

Ha várható közreműködés, legyen használható CONTRIBUTING: scope, teszt, regresszió, docs, PR elvárások, unrelated refactor kerülése, baseline tiszteletben tartása.

## 45. Issue és PR template

Ha releváns, legyen bug report, feature request és PR template; bug report kérjen verziót, környezetet, reprodukciót, expected/actual, screenshot/log, platformot.

## 46. Vizuális minőség

Publikus bemutatásra szánt projektben a vizuális dokumentáció release-minőség része, de csak releváns elemek készüljenek: social preview, architecture, workflow/data flow, validation/status, UI screenshot, feature preview. Egyszerű CLI/library esetén több lehet indokolt N/A.

## 47. Egységes design language

A vizuális dokumentáció igazodjon a projekt UI-jához/brandjéhez/színvilágához/célközönségéhez, következetes tipográfiával, színekkel, kontraszttal, spacinggel, ikonokkal és hierarchiával. Ne használj minden projektre azonos generikus sablont.

## 48. Vizuális artifact prioritás

1. valódi UI/browser screenshot; 2. saját projekt-specifikus grafika; 3. SVG; 4. Mermaid; 5. renderelő HTML/script. Különítsd el a REAL UI SCREENSHOT, GENERATED PROJECT GRAPHIC, TECHNICAL DIAGRAM, MOCKUP/CONCEPT kategóriákat.

## 49. SVG és Mermaid

Technikai diagramhoz SVG/Mermaid előnyös. Mermaid architecture/workflow/state/dependency/release/data flow célra; SVG standalone assethez, precíz kontrollhoz, README-hez és PNG exporthoz. Social previewhoz/UI showcase-hez ne automatikusan Mermaidet használj.

## 50. Dark / Light mode

Ha egy asset csak egyik GitHub témában olvasható, készíts megfelelő light/dark változatot vagy használj `<picture>` + media/prefers-color-scheme logikát. Ha egy neutrális asset mindkettőben jó, ne duplikáld.

## 51. Vizuális validáció

Ellenőrizd: nincs levágott/kilógó szöveg, helyes feliratok, kontraszt, GitHub- és mobil-olvashatóság, felbontás, ésszerű fájlméret, frissesség és verzió-egyezés.

## 52. Vizuális frissesség

UI/architecture/workflow/adatforrás/validation/fő feature változásakor ellenőrizd a képeket/diagramokat. Régi screenshot ne tűnjön aktuálisnak; történelmi evidence legyen VERSION/DATE/HISTORICAL jelölésű.

## 53. Social preview

Ha releváns, készíts kb. 2:1 (pl. 1280×640) projekt-specifikus, olvasható, nem clickbait social previewt. A repositoryban lévő kép önmagában nem állítja be a GitHub social previewt; a tényleges beállítás külön GitHub UI/API lépés.

## 54. README-be épített vizualitás

A vizuális assetek legyenek értelmesen beépítve, pl. Hero → Summary → Features → Screenshot → Workflow → Architecture → Validation → Docs/Legal. Ne zsúfold túl.

## 55. Version, manifest és file inventory

Ha segíti az auditálhatóságot, használható VERSION.json, FILE-INVENTORY.json, PACKAGE-MANIFEST.json. Ne formaságból.

## 56. Release checksum

A végleges release artifactokra generálj checksumot, pl. `CHECKSUMS.sha256` vagy CI artifact. A checksum fájl ne hash-elje saját magát. Commitolt hash-manifest artifactváltozás után újragenerálandó.

## 57. Többfázisú kivitelezés

Nagy release bontása: A Baseline+Contract, B Technical docs, C Legal/governance, D Visual docs, E Validation, F Final package. A baseline/gate-besorolás ne változzon opportunista módon; részleges állapot ne legyen READY; STATUS legyen naprakész; resume-context legyen minimális.

## 58. Atomikus release

Version, README, STATUS, CHANGELOG, docs, screenshots, diagrams, test evidence, main/release artifact, checksums és manifest egyetlen konzisztens állapot legyen. Régi és új verzió ne keveredjen.

## 59. Test stratégia

Használj TARGETED / FEATURE / REGRESSION teszteket. Teljes regresszió csak indokolt hatókörnél: core logic, architecture, storage, data pipeline, external dependency, release infrastructure, széles UI.

## 60. Browser / runtime test

UI/DOM/interaction/responsive/browser storage/routing/external links/browser API változásnál runtime/browser teszt különösen indokolt. REQUIRED, de nem végrehajtható runtime esetén `EVIDENCE=NOT VERIFIED`, `GATE STATUS=BLOCKED`; ha ez az egyetlen blokkoló ok, release `STATICALLY VERIFIED ONLY`; más blokk mellett `BLOCKED`. „Nem alkalmazható” ≠ „nem tudtam lefuttatni”.

## 61. Dokumentáció és kód szinkron

Release előtt CODE, README, CHANGELOG, STATUS, AGENTS, TESTING, RELEASE NOTES, ARCHITECTURE, VISUALS, VERSION, MANIFEST legyen összhangban.

## 62. ZIP / package szabály

Teljes ZIP csak explicit kérésre készüljön. Egy programfájl módosításánál ne automatikusan.

## 63. Package tisztaság

Publikus package-be ne kerüljön temp, cache, editor backup, credential/API key/token/secret, személyes útvonal, irreleváns régi build, scratch vagy fölösleges debug artifact. A credential/secret gate fix minimum, nem N/A/OPTIONAL/DEVIATION-elhető.

## 64. Release checklist

Minden elem: `REQUIRED: YES/NO`, `STATUS: DONE/N/A/BLOCKED`, indok N/A/BLOCKED esetén. Ellenőrizd a baseline-t, main artifactot, byte-parityt ha elvárt, version consistencyt, static/runtime/integration/regression gate-eket, secret cleanliness-t, license/third-party/external-data státuszt, docs/paritást, privacy/securityt, contributing/template-eket, vizuális docs/validation/legal cleanliness-t, social previewt, checksum/manifest/CI-t, package cleanliness-t és artifact consistencyt. REQUIRED DONE vagy indokolt N/A = teljesült, kivéve fix minimum gate-ek, amelyek nem lehetnek N/A.

## 65. Release status determinisztikus levezetése

1. Ellenőrizd minden REQUIRED gate teljesülését (`DONE` vagy indokolt `N/A`, fix minimum kivételével).
2. Alkalmazható REQUIRED FAIL/ERROR/UNKNOWN/NOT VERIFIED/BLOCKED esetén `BLOCKED`, kivéve ha kizárólag runtime evidence hiányzik.
3. Ha az egyetlen blokk a kötelező runtime/browser evidence hiánya: `STATICALLY VERIFIED ONLY (BLOCKED subtype: missing required runtime evidence)`.
4. Ha minden REQUIRED teljesült, de maradt nem blokkoló ATTENTION/OPTIONAL UNKNOWN/OPTIONAL BLOCKED/limitation: `READY WITH LIMITATIONS`.
5. Ha minden REQUIRED teljesült és nincs limitation: `READY`.

## 66. Final report

Add meg: RELEASE VERSION, STANDARD VERSION, CANONICAL BASELINE, MAIN ARTIFACT; Evidence (Source/Static/Runtime/Integration); Test Result Summary (PASS/EMPTY/UNKNOWN/ATTENTION/FAIL/ERROR); Gate Summary (REQUIRED/OPTIONAL DONE/N/A/BLOCKED); Release Status; limitations; deviations; fő változások; docs/visual/license/third-party/checksum/package helye.

## 67. Abszolút alapelv

Nem az a cél, hogy minden projekt ugyanazokat a fájlokat és képeket kapja, hanem ugyanazt a professzionális minőségi szintet. Releváns = kiváló; valóban nem releváns = indokolt N/A; releváns de hiányzó = BLOCKED; nem bizonyított = UNKNOWN/NOT VERIFIED; hibás = FAIL. Fix minimum gate nem lehet N/A. Kötelező gate hibáját nem szabad limitationné átnevezni.

## 68. Végső munkaszabály

Ne mechanikusan gyárts fájlokat. Először értsd meg a projektet, utána készíts hozzá illő GitHub csomagot. Ha valami technikailag nem megoldható, mondd ki; ha nincs bizonyítva, ne állítsd bizonyítottnak; ha nem releváns, indokold az N/A-t; ha releváns, de hiányzik, ne rejtsd el. A cél a lehető legjobb, legérthetőbb, legszebb, legellenőrizhetőbb és legbiztonságosabban folytatható GitHub projekt.
