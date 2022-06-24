function addTo80(n) {
  return n + 80;
}
// console.log(addTo80(5));

function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      console.log("n found in cache!");
      console.log(cache);
      return cache[n];
    } else {
      cache[n] = n + 80;
      console.log(cache);
      return cache[n];
    }
  };
}

// const memoized = memoizedAddTo80();
// console.log(memoized(5));
// console.log(memoized(5));

function fibonacci() {
  let calculations = 0;
  let cache = {};
  return function fib(n) {
    calculations++;
    console.log(calculations, "calculations");

    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}
let memoizedFibonacci = fibonacci();
console.log(memoizedFibonacci(50));
