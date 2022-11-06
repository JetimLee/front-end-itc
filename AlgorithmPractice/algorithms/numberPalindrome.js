const palindromeChain = (number, stepLimit = 10) => {
  let numberToCheck = number;
  let count = 0;
  let arrayOfStepObj = [];
  while (true) {
    if (count === stepLimit) {
      throw new Error("Step limit exceeded");
    }
    let reversedNumber = parseFloat(
      numberToCheck.toString().split("").reverse().join("")
    );
    if (isPalindrome(numberToCheck)) {
      count++;
      arrayOfStepObj.push({
        step: count,
        inputNumber: numberToCheck,
        reversedNumber,
      });
      break;
    } else {
      count++;
      arrayOfStepObj.push({
        step: count,
        inputNumber: numberToCheck,
        reversedNumber,
      });
      let addedNumbers = reversedNumber + numberToCheck;
      numberToCheck = addedNumbers;
    }
  }
  return arrayOfStepObj;
};

const isPalindrome = (number) => {
  return parseInt(number.toString().split("").reverse().join("")) === number;
};

console.log(palindromeChain(39));
