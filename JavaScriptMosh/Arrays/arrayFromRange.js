const arrayFromRange = (min, max) => {
  let newArray = [];
  console.log(newArray);
  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }
  console.log(newArray);
  return newArray;
};

arrayFromRange(-10, -4);
