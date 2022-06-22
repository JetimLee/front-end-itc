function sumAll(arr) {
  console.log(arr);
  let sum = 0;
  const maxNumber = Math.max(...arr);
  const smallestNumber = Math.min(...arr);
  console.log(maxNumber);
  console.log(smallestNumber);
  for (let i = smallestNumber; i <= maxNumber; i++) {
    console.log(i, "i");
    sum += i;
    console.log(sum);
  }
  return sum;
}

sumAll([5, 10]);
