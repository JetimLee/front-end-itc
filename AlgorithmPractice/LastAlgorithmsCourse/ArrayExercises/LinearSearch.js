let search = (arr, v) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === v) {
      return true;
    }
  }
  return false;
};

let firstArray = [11, 69, 23, 40];

console.log(search(firstArray, 40));
console.log(search(firstArray, 9));
