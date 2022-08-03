// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

//factorial - 5! = 5*4*3*2*1

//both cases here are O(n) in time complexity

function findFactorialRecursive(number) {
  console.log(number, "number in recursion");
  //code here
  if (number === 2) {
    return 2;
  }

  let result = number * findFactorialRecursive(number - 1);
  console.log(result);
  return result;
}
findFactorialRecursive(5);

function findFactorialIterative(n) {
  let result = 1;
  if (n > 1) {
    for (let i = 1; i <= n; i++) {
      result = result * i;
      console.log(result);
    }
    console.log(result);
    return result;
  } else {
    return "n has to be positive";
  }
}

// findFactorialIterative(5);
