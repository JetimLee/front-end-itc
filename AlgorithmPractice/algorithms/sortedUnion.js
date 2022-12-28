function uniteUnique(...arr) {
  let mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      mySet.add(arr[i][j]);
    }
  }
  return Array.from(mySet);
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
