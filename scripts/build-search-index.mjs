import fs from 'node:fs';
const root=new URL('..',import.meta.url);
const coords=JSON.parse(fs.readFileSync(new URL('../data/coordinates.json',import.meta.url),'utf8'));
const experiments=JSON.parse(fs.readFileSync(new URL('../data/experiments.json',import.meta.url),'utf8'));
const pages=['fuse','manifesto','grammar','stacking','translation','creolization','machine','experiments','results','corpus','methods','failures','primitives','provenance','questions','future','about'];
const index={generated:new Date().toISOString(),pages,coordinates:coords.map(c=>({id:c.id,coordinate:c.coordinate,canonical_crystallization:c.canonical_crystallization})),experiments:experiments.map(e=>({id:e.experiment_id,title:e.title,status:e.status}))};
fs.writeFileSync(new URL('../public/data/search-index.json',import.meta.url),JSON.stringify(index,null,2)+'\n');
console.log(`Search index: ${index.coordinates.length} coordinates, ${index.experiments.length} experiments.`);
