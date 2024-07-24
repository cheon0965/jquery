// fsTest.js

import fs from 'fs';
fs.readFile('c:/temp/array.js', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1.' + data);
});

let text = fs.readFileSync('c:/temp/array.js', 'utf8');
console.log('2. ' + text);

console.log('3. end');
