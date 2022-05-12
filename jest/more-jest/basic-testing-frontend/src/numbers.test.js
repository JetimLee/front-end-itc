import { describe, expect, it } from "vitest";
import { transformToNumber, cleanNumbers } from "./util/numbers";

describe("testing transformToNumber function", () => {
  it("should return a number of type number when given a number that is a string", () => {
    const testNumber = "1";
    const result = transformToNumber(testNumber);

    expect(result).toBeTypeOf("number");
  });
  it("should return a number that isn't a string and isn't NaN", () => {
    const testNumber = "1";
    const result = transformToNumber(testNumber);
    expect(result).toBe(1);
  });
  it("should return NaN when given a string", () => {
    const value = "something";
    const anotherValue = {};
    const result2 = transformToNumber(anotherValue);
    const result = transformToNumber(value);
    expect(result).toBeNaN();
    expect(result2).toBeNaN();
  });
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values is provided", () => {
    const value = ["1", "2", "3"];
    const result = cleanNumbers(value);
    //this is technically an integration test since there are multiple functions being tested here
    expect(typeof result[0] === "number").toBeTruthy();
  });
  //this test will fail due to the toBe
  it("should return the same array of numbers of type number from an array of numbers of type number when given an array of numbers that are of type string", () => {
    const value = ["1", "2", "3"];
    const result = cleanNumbers(value);
    const convertedArray = [1, 2, 3];
    //toBe is equivelant to === whereas toEqual just checks if they are equal
    expect(result).toBe(convertedArray);
  });

  it("should throw an error if given an empty string", () => {
    const value = ["", 1];
    const resultFn = () => {
      cleanNumbers(value);
    };
    expect(resultFn).toThrow();
  });
  it("should throw an error when given an invalid input that cannot be converted to a number", () => {
    const value = ["$"];
    const resultFn = () => {
      cleanNumbers(value);
    };
    expect(resultFn).toThrow();
  });
});
