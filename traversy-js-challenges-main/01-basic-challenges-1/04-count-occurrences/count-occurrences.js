function countOccurrences(string, char) {
  let counter = 0;
  for (let s of string) {
    if (s === char) {
      counter += 1;
    }
  }
  return counter;
}

module.exports = countOccurrences;
