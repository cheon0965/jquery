// array.js
// map, fulter sort

let arr = [
  { username: 'choi', dept: '개발', sal: 2000 },
  { username: 'park', dept: '인사', sal: 1000 },
  { username: 'kim', dept: '개발', sal: 1500 },
];

// 1. 사원이 1500 이상인 사원 조회 fillter
let result = arr.filter((arr) => arr.sal >= 1500);
console.log(result);
// username이 park 인 사원(find)
let findResurt = arr.find((arr) => arr.username == 'park');
console.log(findResurt);

// 2. 급여 오름차순으로 정렬 sort (파괴함수)
arr.sort(function (a, b) {
  return a.sal - b.sal;
});
console.log(arr);
// 2-1 이름순
arr.sort(function (a, b) {
  if (a.username > b.username) return 1;
  else if (a.username == b.username) return 0;
  else return -1;
});
console.log(arr);

// 3. 급여 합계 reduce
let sum = arr.reduce(function (tot, el) {
  return (tot += el.sal);
}, 0);
console.log('급여 합: ' + sum);

// 4. 모든 사원의 급여를 500 인상(map)
let map = arr.map(function (obj) {
  // let rObj = { username: obj.username, dept: obj.username, sal: obj.sal + 500 };
  // return rObj;
  // obj.sal += 500;)
  return { ...obj, sal: obj.sal + 500 };
});
console.log(map);

// 5. [] 급여가 1500이상인 사람
let resultFilterMap = arr.filter((arr) => arr.sal >= 1500).map((obj) => obj.username);

console.log(resultFilterMap);
