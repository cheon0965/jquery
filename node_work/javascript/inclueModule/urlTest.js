// urlTest.js

const myurl = new URL('https://nodejs.org/docs/latest/api/fs.html?id=123#goog-gt-tt');
console.log(myurl.search);
console.log(myurl.searchParams.get('id'));
console.log(myurl.protocol);
console.log(myurl.pathname);
console.log(myurl.hash);
