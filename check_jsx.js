const fs = require('fs');
const content = fs.readFileSync('src/app/pages/Home.tsx', 'utf8');
const lines = content.split('\n');
let depth = 0;
let output = '';
lines.forEach((line, i) => {
  const opens = (line.match(/<div/g) || []).length;
  const closes = (line.match(/<\/div/g) || []).length;
  if (opens !== 0 || closes !== 0) {
    depth += opens - closes;
    output += `${i + 1}: ${depth} | ${line.trim().substring(0, 50)}\n`;
  }
});
output += 'Final depth: ' + depth;
fs.writeFileSync('jsx_results.txt', output);
