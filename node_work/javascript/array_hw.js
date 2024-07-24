// array_hw.js
let arr = [
  { stdId: 1, kor: 90, eng: 80 },
  { stdId: 2, kor: 70, eng: 50 },
  { stdId: 3, kor: 60, eng: 90 },
];
// 1. kor emg 합계순으로 정렬
arr.sort(function (a, b) {
  return b.kor + b.eng - a.kor - a.eng;
});
console.log(arr);
// 2. 평균이 60 미만인 학번만 출력
let result = arr
  .filter((arr) => (arr.kor + arr.eng) / 2 <= 60)
  .map(function (obj) {
    let rObj = { stdId: obj.stdId };
    return rObj;
  });
console.log(result);
