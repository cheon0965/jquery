// totalModule.js

function total(fst, ...arr) {
  return arr.reduce((total, ele) => (total += ele), fst);
}

module.exports = total;
