let animals = [];

describe("animals array", () => {
  beforeAll(() => {
    //this runs before all tests one time
    console.log("this runs before all other tests");
    animals.push("elephant", "giraffe", "zebra", "bear", "alligator");
  });
  beforeEach(() => {
    //this will run before each test is ran

    console.log("before test \n", animals);
    animals = ["elephant", "giraffe", "zebra", "bear", "alligator"];
  });
  afterEach(() => {
    //this will run after each test
    console.log("after each\n", animals);
  });
  afterAll(() => {
    //this runs after all tests one time
    animals = [];
    console.log("after all \n", animals);
  });
  it("should add animal to end of array", () => {
    animals.push("crocodile");
    expect(animals[animals.length - 1]).toBe("crocodile");
  });

  it("should add animal to beginning of array", () => {
    animals.unshift("dog");
    expect(animals[0]).toBe("dog");
  });
  //in this format the previous tests are altering the array, thus the length will be affected and the final test here will fail
  it("should have initial length of 5", () => {
    expect(animals.length).toBe(5);
  });
});

//it.only will fire only that test
//beforeEach and afterEach should always be at the top level as they will always fire, even with a it.only
//if a beforeEach or afterEach is only relevant for one test block, just put it inside of the describe block
describe("testing something else", () => {
  it("true should be truthy", () => {
    expect(true).toBeTruthy();
  });
});
