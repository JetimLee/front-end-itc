// Even the Odds
// For this set of positive numbers [1, 4, 5, 6, 21, 34, 3, 27, 32], write a function that returns a new
// array where each even number is the previous number and the next number multiplied together
// and each odd number is the previous number and the next number added together. For
// example, in an array of [3, 6, 9] for the number 6 you would multiply 3 * 9 and replace 6 in the
// array with the number 27. For undefined values, treat them as 1’s.
// Input
// [1, 4, 5, 6, 21, 34, 3, 27, 32]
// Your Answer

const inputtedArray = [1, 4, 5, 6, 21, 34, 3, 27, 32];
const anotherTest = [undefined, 1, 2, 3, undefined];
const testArray = [4, undefined, 4, undefined, 2, 5, 8, 9, undefined, 10];
const oneMoreTest = [3, 6, 9];
const evenTheOdds = (arr) => {
  const firstNumberPosition = arr.indexOf(arr[0]);
  const lastNumberPosition = arr.indexOf(arr[arr.length - 1]);
  const evenedOddsArray = arr.map((num, index) => {
    if (typeof num === "undefined") {
      return (arr[num] = 1);
    } else if (num % 2 === 0) {
      if (index === firstNumberPosition) {
        if (arr[index + 1] === undefined) {
          arr[index + 1] = 1;
        }
        let newFirstNumber = arr[index] * arr[index + 1];
        return newFirstNumber;
      } else if (index === lastNumberPosition) {
        if (arr[index - 1] === undefined) {
          arr[index - 1] = 1;
        }
        let newLastNumber = arr[index] * arr[index - 1];
        return newLastNumber;
      } else {
        if (arr[index + 1] === undefined) {
          arr[index + 1] = 1;
        } else if (arr[index - 1] === undefined) {
          arr[index - 1] = 1;
        }
        let newNumber = arr[index + 1] * arr[index - 1];
        return newNumber;
      }
    } else {
      if (index === firstNumberPosition) {
        if (arr[index + 1] === undefined) {
          arr[index + 1] = 1;
        }
        let newFirstNumber = arr[index] + arr[index + 1];
        return newFirstNumber;
      } else if (index === lastNumberPosition) {
        if (arr[index - 1] === undefined) {
          arr[index - 1] = 1;
        }
        let newLastNumber = arr[index] + arr[index - 1];
        return newLastNumber;
      } else {
        if (arr[index + 1] === undefined) {
          arr[index + 1] = 1;
        } else if (arr[index - 1] === undefined) {
          arr[index - 1] = 1;
        }
        let newNumber = arr[index - 1] + arr[index + 1];
        return newNumber;
      }
    }
  });
  console.log(evenedOddsArray);
  return evenedOddsArray;
};
evenTheOdds(oneMoreTest);
evenTheOdds(anotherTest);
evenTheOdds(testArray);
evenTheOdds(inputtedArray);
