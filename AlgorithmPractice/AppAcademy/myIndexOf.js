function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(myIndexOf([1, 2, 3, 4], 4));
console.log(myIndexOf([5, 6, 7, 8], 2));
