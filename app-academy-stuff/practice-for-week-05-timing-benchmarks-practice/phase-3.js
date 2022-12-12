const [addNums, addManyNums] = require("./phase-1");
const [addNums10, addManyNums10] = require("./phase-2");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  console.time("start");

  addNums10(increment);
  // Then, add timing code
  // Your code here
  console.timeEnd("start");
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code
  // Your code here
  console.time("start");
  addManyNums10(increment);
  // Then, add timing code
  // Your code here
  console.timeEnd("start");
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
