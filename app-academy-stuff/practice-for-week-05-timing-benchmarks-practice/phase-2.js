const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  let values = [];
  let value = increment;
  // Fill this in
  for (let i = 0; i < 10; i++) {
    values.push(addNums(value));
    value += increment;
  }
  return values;
}

// console.log(addNums10(10));
// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let values = [];
  let value = increment;
  // Fill this in
  for (let i = 0; i < 10; i++) {
    values.push(addManyNums(value));
    value += increment;
  }
  return values;
}
console.log(addManyNums10(10));

module.exports = [addNums10, addManyNums10];
