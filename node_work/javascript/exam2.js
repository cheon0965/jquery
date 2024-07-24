// Promise 실습
let num1 = 10;
let num2 = 20;
let total = 25;

numSum()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// 두수의 값이 total 과 같다면 resolve 아니면 reject
function numSum() {
  return new Promise((resolve, reject) => {
    if (num1 + num2 == total) {
      resolve('합입니다.');
    } else {
      reject('합이 아닙니다.');
    }
  });
}

async function sumAwait() {
  let result = await numSum().catch((err) => console.log(err));
  console.log(result);
}

sumAwait();
