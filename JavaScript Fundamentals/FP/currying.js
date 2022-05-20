//currying - take a function taht can take multiple parameters, change it to a function that takes one parameter at a time

const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(3)(5));

const multiplyBy10 = curriedMultiply(10);
const oneHundred = multiplyBy10(10);
console.log(oneHundred);
