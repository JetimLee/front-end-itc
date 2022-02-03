const includez = (array, searchElement) => {
  let foundElement = false;
  if (array.indexOf(searchElement) > -1) {
    foundElement = true;
    return foundElement;
  }
  return foundElement;
};
const numbers = [1, 2, 3, 4, 5];

console.log(includez(numbers, "s"));
console.log(includez(numbers, 5));
