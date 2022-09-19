const passwordValidator = (password, username) => {
  let lengthOfPassword = password.length;
  if (lengthOfPassword >= 8 === false) return false;
  let passWordStringCheck = "";
  let space = /\s/;
  if (space.test(password) === true) return false;
  for (let i = 0; i < lengthOfPassword; i++) {
    passWordStringCheck += password[i];
    if (passWordStringCheck === username) return false;
  }
  return true;
};

console.log(passwordValidator("dogLuvr123!", "dogLuvr"));
console.log(passwordValidator("89Fjj1nm", "dogLuvr"));
