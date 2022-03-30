//function express
let myFunction = function () {
  console.log("my function");
};

const sum = (arr) => {
  let arraySum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  console.log(arraySum);
};
let myArray = [1, 2, 3];
sum(myArray);

const restOperatorExample = (...args) => {
  console.log(args);
  console.log(args.reduce((a, b) => a + b));
};
//rest operator treats args as an array
restOperatorExample(1, 2, 3, 4, 5);
//rest operator is used in the parameters of a function

function showDiscount(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  console.log(total * (1 - discount));
}
showDiscount(0.1, 20, 50);
