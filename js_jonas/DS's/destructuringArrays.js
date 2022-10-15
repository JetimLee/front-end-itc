const arr = [2, 3, 4];
const [a, b, c] = arr;
const [d, , e] = arr;
console.log(a);

console.log(e);

const nested = [2, 4, [5, 6]];
const [first, , [third, fourth]] = nested;
console.log(first, third, fourth);

//using default values
//useful when calling an API and you aren't sure what is going to be returned.
const [one = 1, two = 1, three = 1] = [3];

console.log(one, two, three);

const arr1 = [7, 8, 9];
const newStuff = [...arr1, 10, 11, 12];
const copyNewStuff = [...newStuff];
copyNewStuff[0] = 69;
console.log(newStuff);
console.log(...newStuff);
console.log(copyNewStuff);
