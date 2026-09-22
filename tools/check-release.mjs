import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const appPath = path.join(root, 'index.html');
const html = fs.readFileSync(appPath, 'utf8');
const checks = [];
const pass = (id, actual='PASS') => checks.push({id,status:'PASS',actual});
const fail = (id, actual) => checks.push({id,status:'FAIL',actual});

if (/const APP_VERSION='V055-GitHubRelease'/.test(html)) pass('APP_VERSION'); else fail('APP_VERSION','missing/wrong');
const numericInputs = [...html.matchAll(/<input\b[^>]*\btype=["']number["'][^>]*>/gi)].length;
(numericInputs===2?pass:fail)('EXACTLY_TWO_NUMERIC_INPUTS', numericInputs);
const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(m=>m[1]);
const dup = ids.filter((x,i)=>ids.indexOf(x)!==i);
(dup.length===0?pass:fail)('NO_DUPLICATE_IDS', [...new Set(dup)]);
if (/IndexedDB-only runtime persistence/.test(html)) pass('INDEXEDDB_ARCHITECTURE_MARKER'); else fail('INDEXEDDB_ARCHITECTURE_MARKER','missing');
if (/SALVAGE_OPERATIONAL_SNAPSHOT/.test(html)) pass('SLIM_SNAPSHOT_MARKER'); else fail('SLIM_SNAPSHOT_MARKER','missing');
if (/CMAT_HEADING_LINKS_TO_UEX_DEMAND/.test(html) && /RMC_RESULT_DEEP_LINK_USES_TERMINAL_ID/.test(html)) pass('UEX_DEEP_LINK_DIAGNOSTICS'); else fail('UEX_DEEP_LINK_DIAGNOSTICS','missing');
if (/This is an unofficial community Star Citizen fan tool/.test(html) && /robertsspaceindustries\.com/.test(html)) pass('VISIBLE_FAN_SITE_NOTICE'); else fail('VISIBLE_FAN_SITE_NOTICE','missing');
if (/api\.star-citizen\.wiki/.test(html) && /github\.com\/KrovaxCode\/SCMDB_DATA/.test(html) && /uexcorp\.space/.test(html)) pass('SOURCE_CREDITS'); else fail('SOURCE_CREDITS','missing');
if (/hu:\s*\{/.test(html) && /en:\s*\{/.test(html)) pass('HU_EN_I18N'); else fail('HU_EN_I18N','missing');
// No local external JS/CSS dependencies for the app itself.
const localScript = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["']/gi)].map(m=>m[1]).filter(x=>!/^https?:/i.test(x));
const localCss = [...html.matchAll(/<link\b[^>]*\brel=["']stylesheet["'][^>]*\bhref=["']([^"']+)["']/gi)].map(m=>m[1]).filter(x=>!/^https?:/i.test(x));
(localScript.length===0 && localCss.length===0 ? pass : fail)('SINGLE_FILE_NO_LOCAL_DEPS',{localScript,localCss});

const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)].map(m=>m[1]);
const tmp = path.join(os.tmpdir(),'spg-salvage-inline-check.js');
fs.writeFileSync(tmp, scripts.join('\n'));
const nodeCheck = spawnSync(process.execPath,['--check',tmp],{encoding:'utf8'});
(nodeCheck.status===0?pass:fail)('INLINE_JS_SYNTAX', nodeCheck.status===0?'PASS':(nodeCheck.stderr||nodeCheck.stdout));

const failed = checks.filter(x=>x.status!=='PASS');
const out = {app:'sPg Salvage Selling Price',version:'V055-GitHubRelease',generatedAt:new Date().toISOString(),status:failed.length?'FAIL':'PASS',checks};
console.log(JSON.stringify(out,null,2));
process.exit(failed.length?1:0);
