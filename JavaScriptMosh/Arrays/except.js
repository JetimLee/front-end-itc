const numbers = [1, 2, 3, 4, 5];

const except = (arr, values) => {
  let removedNumbers = arr.filter((el) => {
    if (values.includes(el) === false) {
      return el;
    }
  });
  console.log(removedNumbers);
};

except(numbers, [1, 2]);
