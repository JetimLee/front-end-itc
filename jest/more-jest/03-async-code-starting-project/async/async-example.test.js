import { generateToken, generateTokenPromise } from "./async-example";
import { describe, it, expect } from "vitest";

//dealing with code that relies on callbacks
describe("generateToken()", () => {
  it("should generate a token value", (done) => {
    const testUserEmail = "gavin@gmail.com";
    generateToken(testUserEmail, (err, token) => {
      try {
        expect(token).toBeDefined();
        // expect(token).toBe(2);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it("should generate a token value", async () => {
    const testUserEmail = "gavin@gmail.com";
    //using async await
    //You don't need to return when using async / await (since a function annotated with async returns a promise implicitly)
    const result = await generateTokenPromise(testUserEmail);
    expect(result).toBeDefined();
    //can also do this
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
  });
});
