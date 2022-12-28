const str = "JavaScript is simple but not easy to master";
const wordLimit = 3;

function truncateWithWordLimit(str, wordLimit) {
  // write your solution here
  let wordList = str.split(" ");
  let sentenceToReturn = wordList.slice(0, wordLimit);
  return sentenceToReturn.join(" ");
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`);
