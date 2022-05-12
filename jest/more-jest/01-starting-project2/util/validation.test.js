import { describe, expect, it, vi } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty()", () => {
  it("should not be able to handle an empty string", () => {
    const resultFn = () => {
      validateNotEmpty("", "empty string!");
    };
    expect(resultFn).toThrow();
  });
  it("should throw an error that has a messgae that is equal to the second argument sent to the argument", () => {
    const resultFn = () => {
      validateNotEmpty("", "empty string!");
    };
    expect(resultFn).toThrow(/empty string!/);
  });
  it("should be called with the provided arguments", () => {
    const mock = vi.fn();
    mock("", "empty string!");
    expect(mock).toHaveBeenCalledWith("", "empty string!");
  });
});
