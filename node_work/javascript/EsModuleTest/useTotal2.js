// useTotal.js
//  default(하나만 가능)는 바로 받고 아니면 {}안에서 받음
import * as myMath from './totalModule.js';
console.log(myMath.total(10, 20, 30, 40, 50));
let arr = [1, 2, 3, 4];
console.log(myMath.findNum(2, arr));
console.log(myMath.filterNum(2, arr));
