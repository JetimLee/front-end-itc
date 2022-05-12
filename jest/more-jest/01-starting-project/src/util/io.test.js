import { it, expect, describe, vi } from "vitest";
import { promises as fs, write } from "fs";
import writeData from "./io";

//hard to use a spy with this since it is relying on a module that isn't under our control
//this is where mocks will come in
describe("writeData()", () => {
  //this will go in and find fs and replace all of the calls with empty spy functions
  vi.mock("fs");
  vi.mock("path", () => {
    console.log("path mock called");
    return {
      default: {
        join(...args) {
          console.log(...args, "args in default");
          console.log(args[args.length - 1], "arg given to test path");
          return args[args.length - 1];
        },
      },
    };
  });
  //vi.mock is hoisted to the top, whereas jest.mock is not hoisted
  it("should execute the writeFile method with the given arguments", () => {
    const testData = "Test";
    const fileName = "test.txt";
    writeData(testData, fileName);
    //would do this instead of async/await since nothing is being returned, just checking if it does resolve and doesn't get rejected
    // return expect(writeData(testData, fileName)).resolves.toBeUndefined();

    //doing it this way to mock the fs system and then see if writeFile is called without actually calling it.
    //great way of checking if a function from a module that we don't control was called
    // expect(fs.writeFile).toBeCalled();
    expect(fs.writeFile).toBeCalledWith(fileName, testData);
  });
});
