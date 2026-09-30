import fs from "node:fs";
const [outPath,srcPath]=process.argv.slice(2); if(!outPath||!srcPath){console.error("Usage: node scripts/check-output.mjs <output.md> <source.md>");process.exit(2);}
const out=fs.readFileSync(outPath,"utf8"), src=fs.readFileSync(srcPath,"utf8"); let bad=false;
for(const h of ["## 今回の要約","## 実施したこと","## 得られた結果","## 考察","## 課題・未解決事項","## 次に行うこと","## 根拠台帳"]){if(!out.includes(h)){console.error(`MISSING HEADING: ${h}`);bad=true;}}
if(!/\[(ACT|COND|RESULT|INTERP|ISSUE|NEXT|FEEDBACK)-\d+\]/.test(out)){console.error("NO EVIDENCE IDS");bad=true;}
const nums=[...src.matchAll(/\d+(?:\.\d+)?%/g)].map(x=>x[0]); for(const n of nums){if(!out.includes(n)){console.error(`MISSING SOURCE NUMBER: ${n}`);bad=true;}}
if(bad)process.exit(1); console.log("PASS: required structure, evidence IDs, and source percentages found");
