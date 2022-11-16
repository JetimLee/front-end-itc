/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let strArray = s.split(" ");
  let wordsOnly = strArray.filter((el) => el !== "");
  console.log(wordsOnly);
  return wordsOnly[wordsOnly.length - 1].length;
};

let testString = "   fly me   to   the moon  ";

console.log(lengthOfLastWord(testString));
