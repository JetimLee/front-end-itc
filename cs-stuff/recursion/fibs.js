// function fibonacci(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// function fib(n) {
//   if (n == 0) return [0];
//   if (n == 1) return [0, 1];
//   const arr = fib(n - 1);
//   return [...arr, arr[n - 1] + arr[n - 2]];
// }

// console.log(fib(8));

function fib(n) {
  const arr = [0, 1];
  if (n <= 0)
    return "Please enter a valid number of elements to be given an answer.";
  if (n === 1) return [0];
  if (n === 2) return arr;
  for (let i = 2; i < n; i++)
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return arr;
}

console.log(fib(8));
