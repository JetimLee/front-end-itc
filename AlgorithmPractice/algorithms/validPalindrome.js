/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let myRegex = /[^a-z0-9-]/gi;
  let spaceRegex = /\s+/g;

  const replacedString = s.replace(myRegex, "");
  console.log(replacedString);
  const noSpacesString = replacedString.replace(spaceRegex, "");
  console.log(noSpacesString);
  const noDash = noSpacesString.replace(/-/g, "");
  const stringToLowerCase = noDash.toLowerCase();
  const reversedString = stringToLowerCase
    .split("")
    .reverse("")
    .join("")
    .toLowerCase();
  console.log(stringToLowerCase);
  console.log(reversedString);
  return reversedString === stringToLowerCase;
};

let myString = "A man, a plan, a canal -- Panama";

console.log(isPalindrome(myString));
