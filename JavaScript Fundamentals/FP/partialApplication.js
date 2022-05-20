//partial application - difference between this and currying is that on the second application the function expects the rest of the arguments
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = (a) => (b) => (c) => a * b * c;

console.log(curriedMultiply(3)(4)(10));

const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));
