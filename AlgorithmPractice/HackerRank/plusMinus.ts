function plusMinus(arr: number[]): void {
  // Write your code here
  let numberOfZeros = 0;
  let numbersOfPositives = 0;
  let numberOfNegatives = 0;
  const lengthOfArray = arr.length;
  for (let i = 0; i < lengthOfArray; i++) {
    if (Math.sign(arr[i]) === 1) {
      numbersOfPositives += 1;
    } else if (Math.sign(arr[i]) === -1) {
      numberOfNegatives += 1;
    } else {
      numberOfZeros += 1;
    }
  }
  console.log((numbersOfPositives / lengthOfArray).toFixed(6));
  console.log((numberOfNegatives / lengthOfArray).toFixed(6));
  console.log((numberOfZeros / lengthOfArray).toFixed(6));
}

const testArray = [1, 1, 0, -1, -1];

plusMinus(testArray);
