// objectLiteral.js
// 객체 상수
let username = 'hello';
let temp = ' ';
let getName = function () {};
let obj = { username, hoby: [], addr: { zip: 'S0001', si: '대구' }, getName };

// 구조분해
let { addr, hoby } = obj;
// let addr = obj.addr;
// let hoby = obj.hoby;
console.log(addr.zip);

// 배열 구조분해
let scores = [90, 80, 100, 50, 70];
let [fst, snd, ...rest] = scores;
console.log(fst, snd, rest);

// 배열 얕은복사
let copySores = scores;
copySores[0] = 10;
console.log(scores[0], copySores[0]);

// 배열 깊은복사 :  spread 연산자 (내부 객체들은 깊은복사 안됨)
let deepCopySores = [...scores];
deepCopySores[0] = 50;
console.log(scores[0], deepCopySores[0]);

// 객체 얕은복사
let emp = { username: 'choi', dept: '개발', sal: 5000 };
let compyEmp = emp;
compyEmp.sal = 1000;
console.log(compyEmp.sal, emp.sal);

// 객체 깊은복사
let deepCompyEmp = { ...emp, sal: 3000 };
console.log(deepCompyEmp.sal, emp.sal);
