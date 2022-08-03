//the tsconfig file is definitely a good thing to review and the different settings you can adjust there

let sales: number = 123_456_789;

let course: string = "TypeScript";
let isPublished: boolean = true;

let numbers: number[] = [1, 2, 3, 4];

//most useful with key/value pairs
let myTuple: [number, string] = [1, "hello"];

//one of the gaps with tuples in TS is the ability to push to the array even after telling the compiler that this tuple should have only a number and a string value inside
// myTuple.push("yes");

//putting const in front of an enum optimizes the code for the compiler
const enum Sizes {
  "LARGE" = 1,
  "MEDIUM",
  "SMALL",
}
let mySize: Sizes = Sizes.LARGE;
console.log(mySize);
//can access values in enums like this
// console.log(Sizes.MEDIUM) - will log out 2
// console.log(Sizes[2]); - will log out "MEDIUM", which is of type string

//in JS functions return undefined by default unless they have a specified return value
//by telling TS what to expect, undefined will not be returned from the function unless explicitly told to return from that function
function calculateTax(income: number, taxYear = 2022): number {
  //the trick in getting around possible undefined arguments if the argument is optional
  if (taxYear < 2022) {
    return income * 1.2;
  }
  return income;
}
console.log(calculateTax(10_000));
console.log(calculateTax(10_000, 2020));

function myErrorHandler(): never {
  throw new Error("An error occurred!");
}
