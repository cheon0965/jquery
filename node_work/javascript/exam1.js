// exam1.js
// spread 연산자 실습

let arr1 = [50, 60, 70];
let arr2 = [20, 30, 40];

// 50출력이 되도록
let arr3 = [arr1, ...arr2];
console.log(arr3[0][0]); //50
console.log(arr3[1]); //20
let arr4 = [...arr1, ...arr2];
console.log(arr4.filter((arr4) => arr4 == 50));
console.log(arr4.filter((arr4) => arr4 == 20));
