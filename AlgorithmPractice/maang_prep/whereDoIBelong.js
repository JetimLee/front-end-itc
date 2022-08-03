function getIndexToIns(arr, num) {
  if (arr.length === 0) return 0;
  const sortedArray = arr.sort((a, b) => {
    return a - b;
  });
  console.log(sortedArray);
  let index;
  for (let i = 0; i < sortedArray.length; i++) {
    if (arr[i] <= num) {
      for (let j = 0; j < sortedArray.length; j++) {
        if (arr[j] >= num) {
          index = j;
          return index;
        }
      }
    }
  }
  return arr.length;
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([2, 5, 10], 15));
