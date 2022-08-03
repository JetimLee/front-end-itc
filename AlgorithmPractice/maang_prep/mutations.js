// function createObj(array) {
//   let obj = {};
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] !== undefined) obj[i] = array[i];
//   }
//   return obj;
// }

function mutation(arr) {
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  let containsSameChars;
  for (let i = 0; i < str2.length; i++) {
    if (str1.includes(str2[i])) {
      containsSameChars = true;
    } else {
      containsSameChars = false;
      return containsSameChars;
    }
  }
  return containsSameChars;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Tiger", "Zebra"]));

console.log(mutation(["voodoo", "no"]));
