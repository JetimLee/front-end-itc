/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

*/

export function countPositivesSumNegatives(input: any) {
  if (input.length === 0 || input === null) {
    return [];
  }
  let sumOfPositive = 0;
  let sumOfNegative = 0;
  let lengthOfArray = input.length;
  for (let i = 0; i < lengthOfArray; i++) {
    if (Math.sign(input[i]) === 1) {
      sumOfPositive += 1;
    } else {
      sumOfNegative += input[i];
    }
  }
  return [sumOfPositive, sumOfNegative];
  throw new Error("The method or operation is not implemented.");
}

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

console.log(countPositivesSumNegatives(testArray));
