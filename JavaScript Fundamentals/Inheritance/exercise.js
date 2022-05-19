//Exercise - extend the functionality of a built in object

//#1
//Date object => to have new method .lastYear() which shows you last year 'YYYY' format.
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};

console.log(new Date().lastYear());
//'1899'

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(`${this[i]} 🗺`);
  }
  return arr;
};
//#Bonus
// Mofify .map() to print '🗺' at the end of each item.
console.log([1, 2, 3].map());
//1🗺, 2🗺, 3🗺

//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.

//Javascript was inspired by Scheme and Java
