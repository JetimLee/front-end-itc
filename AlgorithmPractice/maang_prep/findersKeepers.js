function findElement(arr, func) {
  let number = undefined;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      number = arr[i];
      return number;
    }
  }
  return number;
}
