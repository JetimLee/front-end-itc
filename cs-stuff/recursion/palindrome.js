function recursivePalindrome(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  } else {
    return recursivePalindrome(str.slice(1, str.length - 1));
  }
}

console.log(recursivePalindrome("madam"));
