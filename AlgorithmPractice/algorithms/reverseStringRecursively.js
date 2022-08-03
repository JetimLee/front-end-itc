//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  return str.split("").reverse().join("");
}

//should return: 'yretsam oyoy'
console.log(reverseString("yoyo mastery"));

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}
