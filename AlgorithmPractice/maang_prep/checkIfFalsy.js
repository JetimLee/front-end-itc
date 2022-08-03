function bouncer(arr) {
  let truthies = [];
  for (let i = 0; i < arr.length; i++) {
    if (!!arr[i] === true) {
      truthies.push(arr[i]);
    }
  }
  return truthies;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
