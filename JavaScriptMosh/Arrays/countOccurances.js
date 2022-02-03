const numbers = [1, 1, 2, 3, 4, 4, 6, 7, 6];

const countOccurances = (arr, searchElement) => {
  // let occurances = 0;
  // arr.forEach((number) => {
  //   if (number === searchElement) {
  //     occurances++;
  //   }
  // });
  // console.log(occurances);
  // return occurances;

  const occurances = arr.reduce((acc, current) => {
    const occurance = current === searchElement ? 1 : 0;
    console.log(acc, current, searchElement);
    return occurance + acc;
  }, 0);
  console.log(occurances);
  return occurances;
};
countOccurances(numbers, 6);
