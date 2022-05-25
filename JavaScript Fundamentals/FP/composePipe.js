//composing and piping in JS
//data transfer/transformation should be obvious

//this is going right to left
const compose = (f, g) => (data) => f(g(data));
const makePositive = (number) => Math.abs(number);
const multiplyBy3 = (number) => number * 3;

const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)(-50);
console.log(multiplyBy3AndAbsolute);

//pipe - same thing, but goes left to right
