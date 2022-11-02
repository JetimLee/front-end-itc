function removeZeros(array) {
  // Sort "array" so that all elements with the value of zero are moved to the
  // end of the array, while the other elements maintain order.
  // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
  // Zero elements also maintain order in which they occurred.
  // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
  let length = array.length;
  let index = 0;
  while (index < length) {
    let currentNum = array[index];
    if (currentNum === 0) {
      array.splice(index, 1);
      array.push(0);
      length--;
    } else {
      index++;
    }
  }

  // Do not use any temporary arrays or objects. Additionally, you're not able
  // to use any Array or Object prototype methods such as .shift(), .push(), etc

  // the correctly sorted array should be returned.
  return array;
}

function removeZeros(array) {
  const head = [];
  const tail = [];
  for (const e of array) {
    if (e === 0 || e === "0") {
      tail[tail.length] = e;
    } else {
      head[head.length] = e;
    }
  }
  return [...head, ...tail];
}

console.log(removeZeros([7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]));
