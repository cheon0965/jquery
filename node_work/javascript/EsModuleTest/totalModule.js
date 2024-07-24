// totalModule.js

export function total(fst, ...arr) {
  return arr.reduce((total, ele) => (total += ele), fst);
}

export function findNum(num, arr) {
  return arr.find((arr) => arr == num);
}

export function filterNum(num, arr) {
  return arr.filter((arr) => arr > num);
}
