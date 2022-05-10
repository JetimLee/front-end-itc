import { describe, expect, it } from "vitest";
import { transformToNumber } from "./util/numbers";

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
