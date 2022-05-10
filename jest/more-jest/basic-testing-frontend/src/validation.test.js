import { describe, expect, it } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./util/validation";

describe("testing validateNumber()", () => {
  it("should throw an error if given a NaN argument", () => {
    const value = "something";
    const resultFn = () => {
      validateNumber(value);
    };
    expect(resultFn).toThrow();
  });
  it("should throw an error with a specific message", () => {
    const value = "something";
    const resultFn = () => {
      validateNumber(value);
    };
    expect(resultFn).toThrow(/Invalid number input/);
  });
  it("should not throw an erorr when given a valid number", () => {
    const value = 1;
    const resultFn = () => {
      validateNumber(value);
    };
    expect(resultFn).not.toThrow();
  });
});

describe("testing validateStringNotEmpty()", () => {
  it("should throw an error if given a non string value", () => {
    const value = 1;
    const otherValue = {};
    const resultFn1 = () => {
      validateStringNotEmpty(value);
    };
    const resultFn2 = () => {
      validateStringNotEmpty(otherValue);
    };
    expect(resultFn1).toThrow();
    expect(resultFn2).toThrow();
  });
  it("should not throw when given a string", () => {
    const value = "something yesss";
    const resultFn = () => {
      validateStringNotEmpty(value);
    };
    expect(resultFn).not.toThrow();
  });
  it("should throw when given an empty string", () => {
    const value = "";
    const resultFn = () => {
      validateStringNotEmpty("");
    };
    expect(resultFn).toThrow();
  });
  it("should throw an error with a specific message when given an empty string", () => {
    const value = "";
    const resultFn = () => {
      validateStringNotEmpty(value);
    };
    expect(resultFn).toThrow(/Invalid input - must not be empty/);
  });
});
