// function sumTo(n) {
//   return (n * (n + 1)) / 2;
// }

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumTo(100));

function sumTo(n) {
  if (n === 1) {
    return n;
  }
  return (n += sumTo(n - 1));
}

console.log(sumTo(3));
