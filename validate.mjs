import fs from "node:fs";
const required=["SKILL.md","README.md","references/report-format.md","references/evidence-rules.md","scripts/check-output.mjs","examples/sample-input.md","examples/sample-output.md"];
let bad=false; for(const f of required){if(!fs.existsSync(new URL(`../${f}`,import.meta.url))){console.error(`MISSING: ${f}`);bad=true;}}
const skill=fs.readFileSync(new URL("../SKILL.md",import.meta.url),"utf8");
for(const term of ["name: research-progress-summary","## 第一のルール","## 手順","## 出力上の決まり"]){if(!skill.includes(term)){console.error(`SKILL.md missing: ${term}`);bad=true;}}
if(bad)process.exit(1); console.log("PASS: skill files are valid");
