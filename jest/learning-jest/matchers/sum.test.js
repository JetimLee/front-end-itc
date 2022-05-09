const sum = require("./sum");

describe("example tests", (e) => {
  it("adds 1+2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("object assignment", () => {
    let myObj = {};
    expect(myObj).toEqual({});
  });
  //to be is ===, so when comparing with objects which are passed by reference you need to use .toEqual
});

//best to have only one kind of expect in a test that way you know what is failing

describe("truthy or falsey", () => {
  it("null", () => {
    const n = null;
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy();
    expect(n).toBeNull();
  });
});

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBe(4);
    //can also do to beGreaterThanOrEqualTo
    expect(value).toBeGreaterThan(3);
  });
  it("adding floats", () => {
    const value = 0.1 + 0.2;
    //this has to be pretty close to what is passed in, otherwise it will fail
    expect(value).toBeCloseTo(0.299999);
  });
});

describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  const shoppingLists = [
    "diapers",
    "kleenex",
    "trashcan",
    "bedframe",
    "paper towels",
    "bleach",
    "milk",
  ];
  expect(shoppingLists).toContain("milk");
});

function compileCode() {
  throw new Error("this is a stupid program");
}

describe("exceptions", () => {
  it("compiling goes wrong", () => {
    expect(() => compileCode()).toThrow("this is a stupid program");
  });
});
