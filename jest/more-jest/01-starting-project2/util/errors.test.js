import { describe, expect, it } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HTTPError", () => {
  const myHTTPError = new HttpError(200, "yay", { dataObj: "somestuff" });
  it("should have a property called statusCode", () => {
    expect(myHTTPError).toHaveProperty("statusCode");
  });
  it("should have a property called message", () => {
    expect(myHTTPError).toHaveProperty("message");
  });
  it("should have a property called data", () => {
    expect(myHTTPError).toHaveProperty("data");
  });
  it("should be an instance of HttpError", () => {
    expect(myHTTPError).toBeInstanceOf(HttpError);
  });
  it("should be instantiated with the arguments passed into it", () => {
    expect(myHTTPError.statusCode).toBe(200);
    expect(myHTTPError.message).toBe("yay");
    expect(myHTTPError.data).toEqual({ dataObj: "somestuff" });
  });
});
