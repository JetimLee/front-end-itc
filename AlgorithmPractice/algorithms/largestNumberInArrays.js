function largestOfFour(arr) {
  let results = [];
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i];
    console.log(max, "new array");
    let biggestNumber = arr[i][0];
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i][j]);
      if (arr[i][j] > biggestNumber) {
        biggestNumber = arr[i][j];
      }
    }
    results.push(biggestNumber);
  }
  console.log(results);
  return results;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
