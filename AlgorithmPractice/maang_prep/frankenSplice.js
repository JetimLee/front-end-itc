function frankenSplice(arr1, arr2, n) {
  const newArray = [];
  if (arr2.length === 0) {
    for (let i = 0; i < arr1.length; i++) {
      newArray.push(arr1[i]);
    }
    return newArray;
  }
  for (let i = 0; i < arr2.length; i++) {
    if (i === n) {
      for (let j = 0; j < arr1.length; j++) {
        newArray.push(arr1[j]);
      }
    }
    newArray.push(arr2[i]);
  }
  return newArray.flat(1);
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));
