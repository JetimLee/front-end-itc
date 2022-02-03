const numbers = [77, 1, 2, 3, 4, 69];
const getMax = (arr) => {
  if (arr.length === 0) {
    console.log(undefined);
    return undefined;
  }
  // let max = arr[0];
  // arr.forEach((el) => {
  //   if (el > max) {
  //     max = el;
  //   }
  // });
  // console.log(max);
  // return max;

  let max = arr.reduce((previousValue, current) =>
    previousValue > current ? previousValue : current
  );
  console.log(max);
  return max;
};

getMax(numbers);
