// 1.
function sum(array) {
  let sum = 0;
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } catch (error) {
    if (error instanceof TypeError) {
      console.log("caught a type error!");
    }
  }
}

// let res = sum(null);
// console.log(res);

// 2.
// tests

function sayName(name) {
  if (typeof name === "string") console.log(name);
  else throw new Error("Invalid name! Must be a string!");
}

// sayName("Alex");
// sayName(1);
// Your code here

// // 3.
function greet(greeting) {
  try {
    if (!greeting) {
      throw new Error("There was no greeting given.");
    }
  } catch (error) {
    console.log("Hello World!");
  }

  console.log(greeting);
}

greet();
