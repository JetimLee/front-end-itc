'use strict';

const bookings = [];
const createBooking = (flightNum = 999, numPassengers = 999, price = 999) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
//how to use a default param if wanted
createBooking(undefined, undefined, 9000);

function makeUpperChase(char) {
  return char.toUpperCase();
}

function transform(str, fn) {
  let newStr = '';
  for (let char of str) {
    newStr += fn(char);
  }
  console.log(newStr);
}

transform('this is sparta', makeUpperChase);

const greet = greeting => name => {
  console.log(`${greeting} ${name}`);
};

greet('Hello')('Gavin');

function countExample() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let counter = countExample();

for (let i = 0; i < 10; i++) {
  console.log(counter());
}
