// process.js
// 명령행 인수
import { argv, env } from 'node:process';
argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// 환경변수
for (let i in env) {
  console.log(i + ' : ' + env[i]);
}
for (let [key, val] of Object.entries(env)) {
  console.log(key + ' : ' + val);
}
