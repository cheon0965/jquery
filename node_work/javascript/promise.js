// Promise.js
// 비동기 처리

setTimeout(() => {
  console.log('timeOut');
}, 4000);

// Promise객체가 넘어와서 then 사용 가능
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('time out');
    }, 4000);
  });
}
delay().then((result) => console.log(result));

// 2. 익명함수
let result = (async function () {
  let result = await delay();
  return result;
})();
console.log('2: ' + result);

//3.
delayAwait();
async function delayAwait() {
  let result = await delay();
  console.log('3: ' + result);
}
