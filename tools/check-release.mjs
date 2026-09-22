import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const appPath=path.join(root,'index.html');
const releasePath=path.join(root,'release','sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html');
const html=fs.readFileSync(appPath,'utf8');
const release=fs.readFileSync(releasePath,'utf8');
const checks=[];
const pass=(id,actual='PASS')=>checks.push({id,status:'PASS',actual});
const fail=(id,actual)=>checks.push({id,status:'FAIL',actual});

(/const APP_VERSION='V058-SellOnlyDeterministic'/.test(html)?pass:fail)('APP_VERSION',/const APP_VERSION='([^']+)'/.exec(html)?.[1]||'missing');
(html===release?pass:fail)('INDEX_RELEASE_BYTE_PARITY',html===release?'identical':'different');
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

const failed=checks.filter(x=>x.status!=='PASS');
const out={app:'sPg Salvage Selling Price',version:'V058-SellOnlyDeterministic',generatedAt:new Date().toISOString(),status:failed.length?'FAIL':'PASS',checks};
console.log(JSON.stringify(out,null,2));
process.exit(failed.length?1:0);
