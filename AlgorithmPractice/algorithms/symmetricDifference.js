/*

The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

 */

function sym(args) {
  console.log(arguments);
  const arraysToCompare = Object.values(arguments);
  console.log(arraysToCompare);
  let valuesToReturn = [];
  let valueMap = {};
  arraysToCompare.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (valueMap.hasOwnProperty(arr[i]) !== true) {
        valueMap[arr[i]] = 1;
      } else {
        valueMap[arr[i]] += 1;
      }
    }
  });
  const valuesMapToArray = Object.entries(valueMap);
  for (let i = 0; i < valuesMapToArray.length; i++) {
    console.log(valuesMapToArray[i]);
    if (valuesMapToArray[i][1] === 1) {
      valuesToReturn.push(parseFloat(valuesMapToArray[i][0]));
    }
  }
  console.log(valuesToReturn);
  return valuesToReturn;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);

function sym() {
  var args = [];
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  function symDiff(arrayOne, arrayTwo) {
    var result = [];

    arrayOne.forEach(function (item) {
      if (arrayTwo.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    arrayTwo.forEach(function (item) {
      if (arrayOne.indexOf(item) < 0 && result.indexOf(item) < 0) {
        result.push(item);
      }
    });

    return result;
  }

  // Apply reduce method to args array, using the symDiff function
  return args.reduce(symDiff);
}
const diff = (arr1, arr2) => [
  ...arr1.filter((e) => !arr2.includes(e)),
  ...arr2.filter((e) => !arr1.includes(e)),
];

const sym = (...args) => [...new Set(args.reduce(diff))];
