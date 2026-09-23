import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const appPath=path.join(root,'index.html');
const releasePath=path.join(root,'release','sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html');
const expectedAppSha='0cc91351b280513d95cda2a3463d948189e44ea0a97d001914ce0e88c9bb4ff9';
const expectedRuntimeSha='b5729da604433d0c65eb76790c237900ab695e05a9c71e1333a95ede33301b7c';
const html=fs.readFileSync(appPath,'utf8');
const release=fs.readFileSync(releasePath,'utf8');
const checks=[];
const pass=(id,actual='PASS')=>checks.push({id,status:'PASS',actual});
const fail=(id,actual)=>checks.push({id,status:'FAIL',actual});
const sha256=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');
const exists=(p)=>fs.existsSync(path.join(root,p));

const appSha=sha256(fs.readFileSync(appPath));
const releaseSha=sha256(fs.readFileSync(releasePath));
(appSha===expectedAppSha?pass:fail)('BASELINE_SHA256',appSha);
(releaseSha===expectedAppSha?pass:fail)('RELEASE_SHA256',releaseSha);
(appSha===releaseSha?pass:fail)('INDEX_RELEASE_BYTE_PARITY',appSha===releaseSha?'identical':'different');

(/const APP_VERSION='V058-SellOnlyDeterministic'/.test(html)?pass:fail)('APP_VERSION',/const APP_VERSION='([^']+)'/.exec(html)?.[1]||'missing');
const numeric=[...html.matchAll(/<input\b[^>]*\btype=["']number["'][^>]*>/gi)].length;
(numeric===2?pass:fail)('EXACTLY_TWO_NUMERIC_INPUTS',numeric);
const ids=[...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m=>m[1]);
const dup=[...new Set(ids.filter((x,i)=>ids.indexOf(x)!==i))];
(dup.length===0?pass:fail)('NO_DUPLICATE_IDS',dup);
(/IndexedDB-only runtime persistence/.test(html)?pass:fail)('INDEXEDDB_ARCHITECTURE_MARKER');
(/SALVAGE_OPERATIONAL_SNAPSHOT/.test(html)?pass:fail)('SLIM_SNAPSHOT_MARKER');
(/CMAT_HEADING_LINKS_TO_UEX_DEMAND/.test(html)&&/RMC_RESULT_DEEP_LINK_USES_TERMINAL_ID/.test(html)?pass:fail)('UEX_DEEP_LINK_DIAGNOSTICS');
(/SELL_ONLY_APPLIES_NO_RECOVERY/.test(html)&&/SELL_ONLY_IGNORES_SALVAGE_SHIP_FILTER/.test(html)&&/SELL_ONLY_ORDERING_DOES_NOT_USE_SHIP_ACCESS_WEIGHT/.test(html)&&/REFINE_SELL_STILL_REQUIRES_SHIP_SELECTION/.test(html)?pass:fail)('SELL_ONLY_RUNTIME_GATES_PRESENT');
(/This is an unofficial community Star Citizen fan tool/.test(html)&&/robertsspaceindustries\.com/.test(html)?pass:fail)('VISIBLE_FAN_SITE_NOTICE');
(/api\.star-citizen\.wiki/.test(html)&&/github\.com\/KrovaxCode\/SCMDB_DATA/.test(html)&&/uexcorp\.space/.test(html)?pass:fail)('SOURCE_CREDITS');
(/hu:\s*\{/.test(html)&&/en:\s*\{/.test(html)?pass:fail)('HU_EN_I18N');
const localScript=[...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/gi)].map(m=>m[1]).filter(x=>!/^https?:/i.test(x));
const localCss=[...html.matchAll(/<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["']([^"']+)["']/gi)].map(m=>m[1]).filter(x=>!/^https?:/i.test(x));
(localScript.length===0&&localCss.length===0?pass:fail)('SINGLE_FILE_NO_LOCAL_DEPS',{localScript,localCss});

function extractFunction(name){
  const marker=`function ${name}(`;
  const start=html.indexOf(marker);
  if(start<0)return '';
  const brace=html.indexOf('{',start);
  let depth=0, quote=null, esc=false;
  for(let i=brace;i<html.length;i++){
    const c=html[i];
    if(quote){ if(esc){esc=false;} else if(c==='\\'){esc=true;} else if(c===quote){quote=null;} continue; }
    if(c==='"'||c==="'"||c==='`'){quote=c;continue;}
    if(c==='{')depth++; else if(c==='}'){depth--; if(depth===0)return html.slice(start,i+1);}
  }
  return '';
}
const sellFn=extractFunction('cmatSellBySystem');
(sellFn&&!/passesShipFilter\s*\(/.test(sellFn)?pass:fail)('SELL_ONLY_STATIC_NO_SHIP_FILTER',sellFn?'passesShipFilter absent':'function missing');
(sellFn&&!/(shipAccessWeight|hangarAccessWeight)\s*\(/.test(sellFn)?pass:fail)('SELL_ONLY_STATIC_NO_SHIP_ACCESS_WEIGHT',sellFn?'ship access weight absent':'function missing');
(/preferFreshThenFill\(grouped\[sys\],3,[\s\S]*?\(\)=>0\)/.test(sellFn)?pass:fail)('SELL_ONLY_STATIC_NEUTRAL_TIE_BREAK','neutral access-weight callback');

const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
const tmp=path.join(os.tmpdir(),'spg-salvage-v058-inline-check.js');
fs.writeFileSync(tmp,scripts.join('\n'));
const nodeCheck=spawnSync(process.execPath,['--check',tmp],{encoding:'utf8'});
(nodeCheck.status===0?pass:fail)('INLINE_JS_SYNTAX',nodeCheck.status===0?'PASS':(nodeCheck.stderr||nodeCheck.stdout));

const requiredFiles=[
  'README.md','README.hu.md','README.en.md','LICENSE','NOTICE.md','THIRD_PARTY_NOTICES.md','CHECKSUMS.sha256','FILE-INVENTORY.json','PACKAGE-MANIFEST.json',
  'CHANGELOG.md','CONTRIBUTING.md','SECURITY.md','PRIVACY.md','AGENTS.md','STATUS.md','VERSION.json',
  'docs/RELEASE_STANDARD.md','docs/RELEASE-CONTRACT.md','docs/RELEASE-AUDIT-V4.1.md',
  'docs/ARCHITECTURE.hu.md','docs/ARCHITECTURE.en.md','docs/DATA-SOURCES.hu.md','docs/DATA-SOURCES.en.md',
  'docs/TESTING.hu.md','docs/TESTING.en.md','docs/USER-GUIDE.hu.md','docs/USER-GUIDE.en.md',
  'docs/images/social-preview.png','docs/images/social-preview.svg','docs/images/architecture.png','docs/images/architecture.svg',
  'docs/images/workflow.png','docs/images/workflow.svg','docs/images/validation-status.png','docs/images/validation-status.svg',
  'test-artifacts/V058/runtime-log.json','test-artifacts/V058/runtime-summary.json','test-artifacts/V058/visual-validation-v4.1.json','test-artifacts/V058/release-gate-summary-v4.1.json'
];
const missing=requiredFiles.filter(p=>!exists(p));
(missing.length===0?pass:fail)('REQUIRED_RELEASE_FILES',missing.length?missing:'all present');

const standard=fs.readFileSync(path.join(root,'docs/RELEASE_STANDARD.md'),'utf8');
(/Standard version:\*\* V4\.1|Standard version: V4\.1/.test(standard)?pass:fail)('RELEASE_STANDARD_VERSION','V4.1');
(/RELEASE CONTRACT|Release Contract/i.test(standard)&&/CREDENTIAL \/ SECRET CLEANLINESS/.test(standard)&&/STATICALLY VERIFIED ONLY/.test(standard)?pass:fail)('RELEASE_STANDARD_CORE_RULES');
const agents=fs.readFileSync(path.join(root,'AGENTS.md'),'utf8');
(/docs\/RELEASE_STANDARD\.md/.test(agents)&&/ordinary development tasks/i.test(agents)?pass:fail)('AGENTS_RELEASE_STANDARD_POINTER');
const contract=fs.readFileSync(path.join(root,'docs/RELEASE-CONTRACT.md'),'utf8');
(/CANONICAL BASELINE/.test(contract)&&/REQUIRED gates/.test(contract)&&/OPTIONAL gates/.test(contract)&&/Do not touch/.test(contract)?pass:fail)('RELEASE_CONTRACT_PRESENT');
const audit=fs.readFileSync(path.join(root,'docs/RELEASE-AUDIT-V4.1.md'),'utf8');
(/READY WITH LIMITATIONS/.test(audit)&&/Fan-site notice attention/.test(audit)&&/Visual audit/.test(audit)?pass:fail)('RELEASE_AUDIT_PRESENT');

const version=JSON.parse(fs.readFileSync(path.join(root,'VERSION.json'),'utf8'));
(version.release==='V058-SellOnlyDeterministic'&&version.releaseStandardVersion==='V4.1'&&version.releaseStatus==='READY WITH LIMITATIONS'?pass:fail)('VERSION_METADATA',version);
(version.sha256===expectedAppSha?pass:fail)('VERSION_APP_SHA',version.sha256);

const runtimePath=path.join(root,'test-artifacts/V058/runtime-log.json');
const runtimeSha=sha256(fs.readFileSync(runtimePath));
(runtimeSha===expectedRuntimeSha?pass:fail)('RUNTIME_EVIDENCE_SHA256',runtimeSha);

const visuals=['social-preview.png','architecture.png','workflow.png','validation-status.png'].map(x=>path.join(root,'docs/images',x));
const zeroVisual=visuals.filter(p=>!fs.existsSync(p)||fs.statSync(p).size<1024);
(zeroVisual.length===0?pass:fail)('VISUAL_ASSETS_PRESENT',zeroVisual.length?zeroVisual:'all non-empty');

// No redistributed SCMDB dump should be present; runtime/test evidence is allowed.
function walk(dir){
  const out=[];
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,ent.name);
    if(ent.isDirectory()) out.push(...walk(p)); else out.push(p);
  }
  return out;
}
const allFiles=walk(root);
const scmdbDump=allFiles.filter(p=>/SCMDB_DATA/i.test(path.basename(p)) && !/README|NOTICE|DATA-SOURCES|RELEASE|AGENTS|STATUS/i.test(path.basename(p)));
(scmdbDump.length===0?pass:fail)('NO_SCMDB_DATA_DUMP',scmdbDump.map(p=>path.relative(root,p)));

// Focused secret scan: strong token/key signatures only, to avoid false positives from documentation words.
const secretPatterns=[
  /-----BEGIN (?:RSA |EC |OPENSSH |DSA )?PRIVATE KEY-----/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bghp_[A-Za-z0-9]{30,}\b/,
  /\bgithub_pat_[A-Za-z0-9_]{20,}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/,
  /\bsk-[A-Za-z0-9_-]{30,}\b/
];
const secretHits=[];
for(const file of allFiles){
  if(/\.(png|jpg|jpeg|gif|webp|zip)$/i.test(file)) continue;
  let txt='';
  try{ txt=fs.readFileSync(file,'utf8'); }catch{ continue; }
  for(const re of secretPatterns){ if(re.test(txt)){ secretHits.push({file:path.relative(root,file),pattern:String(re)}); } }
}
(secretHits.length===0?pass:fail)('CREDENTIAL_SECRET_CLEANLINESS',secretHits);

const failed=checks.filter(x=>x.status!=='PASS');
const out={
  app:'sPg Salvage Selling Price',
  version:'V058-SellOnlyDeterministic',
  releaseStandard:'V4.1',
  packageRevision:'V058-GitHub-Release-Standard-V4.1',
  generatedAt:new Date().toISOString(),
  staticGateStatus:failed.length?'FAIL':'PASS',
  releaseStatus:'READY WITH LIMITATIONS',
  checks
};
console.log(JSON.stringify(out,null,2));
process.exit(failed.length?1:0);
