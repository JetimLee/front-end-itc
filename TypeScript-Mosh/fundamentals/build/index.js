"use strict";
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
let numbers = [1, 2, 3, 4];
let myTuple = [1, "hello"];
let mySize = 1;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income;
}
console.log(calculateTax(10000));
console.log(calculateTax(10000, 2020));
function myErrorHandler() {
    throw new Error("An error occurred!");
}
//# sourceMappingURL=index.js.map