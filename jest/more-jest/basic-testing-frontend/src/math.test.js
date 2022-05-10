//can use test or it, they're synonymous

//keep in mind triple a pattern
//arrange, act, assert

//if a test fails/passes be sure to check that expectation values are good

import { expect, it } from "vitest";
import { add } from "./math";

it("should sum all number values in an array", () => {
  //arranging the test
  const numberArray = [1, 2];
  //better way of testing the function is to store the expected result like this, rather than hard coding an expected result like 6
  const expectedResult = numberArray.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  //this is the acting phase
  const results = add(numberArray);
  //this is the assertion phase
  expect(results).toBe(expectedResult);
});

it("should yield NaN if at least one invalid number is provided", () => {
  const testArray = [1, "hello", 3];
  const expectedResult = add(testArray);
  //evaluate type will return false if there is a string returned from add, otherwise it will return true
  const evaluateType = (expectedResult) => {
    if (typeof expectedResult === "string") {
      //don't want a string, so this will return false
      return false;
    }
    return true;
  };
  //we expect a number type to be returned by add

  expect(evaluateType(expectedResult)).toBeTruthy();
});

it("should yield a correct sum if an array of numbers is provided", () => {
  const testArray = ["1", "2"];
  const result = add(testArray);
  //+ in front forces a conversion to a real number
  const expectedResult = testArray.reduce((acc, cur) => {
    return +acc + +cur;
  }, 0);
  expect(result).toBe(expectedResult);
});

it("should yield 0 if an empty array is provided", () => {
  const numbers = [];
  const result = add(numbers);
  expect(result).toBe(0);
});
//good to narrow down which error you're looking for and not just catching all errors
it("should throw an error if no value is passed into the function", () => {
  //store the function you're testing for errors inside another function, then jest will run that function and see if an error is thrown or not
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/something went wrong/);
});

it("should throw an error if provided with multiple arguments instead of an array", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };
  expect(resultFn).toThrow();
});
it("should throw an error that checks if the passed in argument is iterable", () => {
  const resultFn = () => {
    add(1, 2, 3);
  };
  expect(resultFn).toThrow(/is not iterable/);
});
