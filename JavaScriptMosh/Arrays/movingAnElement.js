const numbers = [1, 2, 3, 4];

const move = (arr, index, offset) => {
  const position = index + offset;
  if (position >= arr.length || position < 0) {
    console.error("Invalid range");
    return;
  }

  let newArray = [...arr];
  const element = newArray.splice(index, 1)[0];
  newArray.splice(position, 0, element);
  console.log(newArray);
  return newArray;
};
move(numbers, 0, 2);
move(numbers, 2, 6);
move(numbers, 0, -1);
