import fs from 'node:fs';
const read=p=>JSON.parse(fs.readFileSync(new URL('../'+p, import.meta.url),'utf8'));
const coords=read('data/coordinates.json'), exps=read('data/experiments.json'), results=read('data/results.json'), failures=read('data/failures.json');
const errors=[];
const T=['Differentiation','Opening','Relating','Repair','Integration','Settlement'];
const O=['Focal','Distributed','Release'];
const P=['Standing','Bearing','Efficacy'];
const resultLabels=['OBSERVED','SUPPORTED','INCONCLUSIVE','FAILED','REQUIRES REPLICATION','INTERPRETIVE','HISTORICAL SOURCE','RETROSPECTIVE','HYPOTHESIS'];
const failTypes=['no completion','ambiguous unit','meaning balloon','construction-level error','lexical proxy','semantic dominance','neighbor leakage','translation drift','resolver disagreement','canonical disagreement','independent derivation disagreement','instrument contamination','potential primitive remainder','research-agenda drift'];
if(coords.length!==54) errors.push(`Expected 54 coordinates, got ${coords.length}`);
const seen=new Set();
for(const c of coords){ if(!T.includes(c.transformation_pattern)||!O.includes(c.completion_topology)||!P.includes(c.persistence_mode)) errors.push(`Invalid primitive in ${c.id}`); const k=[c.transformation_pattern,c.completion_topology,c.persistence_mode].join('|'); if(seen.has(k)) errors.push(`Duplicate coordinate ${k}`); seen.add(k); }
for(const t of T) for(const o of O) for(const p of P) if(!seen.has([t,o,p].join('|'))) errors.push(`Missing coordinate ${t}/${o}/${p}`);
const eids=new Set(); for(const e of exps){if(eids.has(e.experiment_id)) errors.push(`Duplicate experiment ID ${e.experiment_id}`); eids.add(e.experiment_id); if(!resultLabels.includes(e.evidence_label)) errors.push(`Invalid evidence label ${e.evidence_label}`)}
const rids=new Set(); for(const r of results){if(rids.has(r.result_id)) errors.push(`Duplicate result ID ${r.result_id}`); rids.add(r.result_id); if(!resultLabels.includes(r.evidence_label)) errors.push(`Invalid result label ${r.evidence_label}`); if(r.evidence_label==='OBSERVED'&&!r.provenance) errors.push(`OBSERVED result missing provenance ${r.result_id}`)}
for(const f of failures){if(!failTypes.includes(f.type)) errors.push(`Invalid failure type ${f.type}`); if(!resultLabels.includes(f.evidence_label)) errors.push(`Invalid failure evidence label ${f.evidence_label}`)}
const demo=read('data/translations/demo.json'); for(const d of demo){if(!d.source_language) errors.push(`Translation demo missing source language ${d.unit_id}`); if(!('blindness_conditions' in d)) errors.push(`Translation demo missing blindness conditions ${d.unit_id}`)}
const pages=['fuse','manifesto','grammar','stacking','translation','creolization','machine','experiments','results','corpus','methods','failures','primitives','provenance','questions','future','about'];
for(const slug of pages){const direct=new URL(`../src/pages/${slug}.astro`,import.meta.url); const dynamic=['fuse','creolization','machine','results','corpus','methods','provenance','questions','future','about'].includes(slug); if(!dynamic&&!fs.existsSync(direct)) errors.push(`Missing public route source /${slug}`)}
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(`Validated ${coords.length} coordinates, ${exps.length} experiments, ${results.length} results, ${failures.length} failure records.`);
