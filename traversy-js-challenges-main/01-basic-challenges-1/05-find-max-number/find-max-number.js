// function findMaxNumber(listOfNumbers) {
//   return listOfNumbers.sort((a, b) => b - a)[0];
// }

function findMaxNumber(listOfNumbers) {
  let maxNumber = Math.min(-Infinity);

  for (let i = 0; i < listOfNumbers.length; i++) {
    if (listOfNumbers[i] > maxNumber) {
      maxNumber = listOfNumbers[i];
    }
  }
  return maxNumber;
}

module.exports = findMaxNumber;
