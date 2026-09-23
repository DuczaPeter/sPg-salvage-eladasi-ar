import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

// Order: CHECKSUMS.sha256 -> PACKAGE-MANIFEST.json -> FILE-INVENTORY.json.
// Gate outputs are produced after the gate runs and are therefore excluded.
const root=process.cwd();
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const read=p=>fs.readFileSync(path.join(root,p));
const STANDARD='V4.2';
const REVISION='V058-GitHub-Release-Standard-V4.2';
const gateOutputs=['test-artifacts/V058/static-check-v4.2.json','test-artifacts/V058/release-gate-summary-v4.2.json'];
const excluded=new Set(['FILE-INVENTORY.json',...gateOutputs]);

const checksumFiles=[
  'index.html','release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html',
  'test-artifacts/V058/runtime-log.json','test-artifacts/V058/runtime-summary.json',
  'test-artifacts/V058/static-check-v4.1.json','test-artifacts/V058/release-gate-summary-v4.1.json','test-artifacts/V058/visual-validation-v4.1.json',
  'docs/RELEASE_STANDARD.md','docs/RELEASE-CONTRACT.md','docs/RELEASE-AUDIT-V4.1.md','docs/RELEASE-AUDIT-V4.2.md',
  'README.md','.gitattributes',
  'docs/images/social-preview.png','docs/images/architecture.png','docs/images/workflow.png','docs/images/validation-status.png'
];
fs.writeFileSync(path.join(root,'CHECKSUMS.sha256'),checksumFiles.map(p=>`${sha(read(p))}  ${p}`).join('\n')+'\n');

const requiredArtifacts=[
  'index.html','release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html','test-artifacts/V058/runtime-log.json',
  'docs/RELEASE_STANDARD.md','docs/RELEASE-CONTRACT.md','docs/RELEASE-AUDIT-V4.2.md','CHECKSUMS.sha256',
  '.gitattributes','.gitignore','.github/workflows/static-check.yml','.github/ISSUE_TEMPLATE/bug_report.yml',
  '.github/ISSUE_TEMPLATE/feature_request.yml','.github/pull_request_template.md'
];
const manifest={
  package:`sPg-Salvage-Eladasi-Ar-${REVISION}`,
  createdAt:new Date().toISOString().slice(0,10),
  releaseStandardVersion:STANDARD,
  releaseStandardSha256:sha(read('docs/RELEASE_STANDARD.md')),
  functionalBaseline:'V058-SellOnlyDeterministic',
  packageRelease:'V058-SellOnlyDeterministic',
  packageRevision:REVISION,
  htmlSha256:sha(read('index.html')),
  releaseHtmlSha256:sha(read('release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html')),
  runtimeLogSha256:sha(read('test-artifacts/V058/runtime-log.json')),
  checksumsSha256:sha(read('CHECKSUMS.sha256')),
  singleFileRelease:'release/sPg_salvage_eladasi_ar_V058_SellOnlyDeterministic.html',
  runtimeEvidence:'test-artifacts/V058/runtime-log.json',
  releaseContract:'docs/RELEASE-CONTRACT.md',
  releaseAudit:'docs/RELEASE-AUDIT-V4.2.md',
  repositoryPublication:'MANUAL BY USER',
  packageStatus:'READY WITH LIMITATIONS',
  publishedReleaseStatus:'BLOCKED - post-publish fresh-clone verification pending',
  requiredBlockedGates:1,
  requiredBlockedGateNames:['PUBLISHED REPOSITORY PARITY (post-publish check pending)'],
  optionalBlockedItems:1,
  requiredArtifacts,
  gateOutputs,
  notes:'Documentation/package revision only. Runtime-validated V058 application bytes are unchanged. Limitations are documented in the V4.2 release audit.'
};
fs.writeFileSync(path.join(root,'PACKAGE-MANIFEST.json'),JSON.stringify(manifest,null,2)+'\n');

function walk(dir,rel=''){
  const out=[];
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    if(['.git','node_modules'].includes(ent.name))continue;
    const r=rel?`${rel}/${ent.name}`:ent.name;
    if(ent.isDirectory())out.push(...walk(path.join(dir,ent.name),r));
    else if(!excluded.has(r))out.push(r);
  }
  return out;
}
const files=walk(root).sort().map(p=>{const b=read(p);return {path:p,bytes:b.length,sha256:sha(b)}});
fs.writeFileSync(path.join(root,'FILE-INVENTORY.json'),JSON.stringify({
  generatedAt:new Date().toISOString().slice(0,10),standardVersion:STANDARD,count:files.length,
  excludedFromInventory:[...excluded].sort(),files
},null,2)+'\n');
console.log(`checksums ${checksumFiles.length}, inventory ${files.length} files`);
