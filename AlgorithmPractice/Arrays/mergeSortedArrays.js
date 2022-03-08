function mergeSortedArrays(arr1, arr2) {
  let mergedAndSortedArray = [...arr1, ...arr2].sort((a, b) => a - b);
  console.log(mergedAndSortedArray);
  return mergedAndSortedArray;
}
mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
