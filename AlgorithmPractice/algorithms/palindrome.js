function palindrome(str) {
  const joinedString = str.split("").join("").toLowerCase();
  const replacedJoinedString = joinedString.replace(/[^a-z0-9]/gi, "");
  let reversedString = str.split("").reverse().join("").toLowerCase();
  const replaced = reversedString.replace(/[^a-z0-9]/gi, "");

  return replaced === replacedJoinedString;
}

console.log(palindrome("My age is 0, 0 si ega ym."));
