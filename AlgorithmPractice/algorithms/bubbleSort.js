function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], "i");
    for (let j = 0; j < arr.length; j++) {
      //need the second for loop because after the values have been swapped you have to recheck everything
      console.log(arr[j], "j");
      if (arr[j] > arr[j + 1]) {
        let pointer = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = pointer;
      }
    }
  }
  return arr;
}
const numbers = [99, 66, 77, 69, 2, 30];

console.log(bubbleSort(numbers));
