function findMaxNumber(listOfNumbers) {
  return listOfNumbers.sort((a, b) => b - a)[0];
}

module.exports = findMaxNumber;
