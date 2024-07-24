import fs from 'fs';

fs.writeFile('c:/temp/test.txt', 'hellow world', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('file write complete');
  }
});
fs.open('c:/temp/test.txt', 'w');
