import { describe, expect, it, vi } from "vitest";
import { HttpError } from "./errors";
import { sendDataRequest } from "./http";

//issue with fetch is that it is globally available, it isn't directly imported from some module
describe("testing http.js", () => {
  console.log("testing http.js");
  //this would be the response data sent by the server
  const testResponseData = { testKey: "some data" };
  //begin mocking fetch
  const testFetch = vi.fn((url, optionsObject) => {
    //creating a test fetch whose logic is being filled in by the vi/jest.fn mock function creator
    console.log("test fetch was called");
    return new Promise((resolve, reject) => {
      if (typeof optionsObject.body !== "string") {
        return reject("Invalid data passed, must stringify before sending");
      }
      const testResponse = {
        //need the ok because that is what is being checked
        ok: true,
        //server receives JSON from the client, sends back JSON data that is then turned into a regular javascript object
        //json needs to be called because the server sends JSON data that must be turned into a regular javascript object
        //.json() exists on original response, as such it must exist here too
        json() {
          return new Promise((resolve, reject) => {
            //.json() is called, which returns a promise that resolves with the testResponseData
            resolve(testResponseData);
          });
        },
      };
      resolve(testResponse);
    });
  });
  vi.stubGlobal("fetch", testFetch);
  it("should return any available response data", async () => {
    const testData = { testKey: "some data" };
    let result = await sendDataRequest(testData);
    expect(result).toEqual(testData);
    //could also do this
    //return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData)
  });
  it("should convert the provided data to JSON before sending the request", async () => {
    const testData = { testKey: "some data" };
    //if rejects or resolves is present then the test expects it to reject or resolve, it doesn't matter if not is in front of resolves or rejects

    let errorMessage;
    try {
      await sendDataRequest(testData);
    } catch (error) {
      errorMessage = error;
    }
    expect(errorMessage).toBeUndefined();
  });
  it("should throw an HttpError in case of non ok responses", () => {
    //something you can implement on your mocks is its implementation and how it will be implemented this one time
    testFetch.mockImplementationOnce((url, optionsObject) => {
      //creating a test fetch whose logic is being filled in by the vi/jest.fn mock function creator
      console.log("test fetch was called");
      return new Promise((resolve, reject) => {
        if (typeof optionsObject.body !== "string") {
          return reject("Invalid data passed, must stringify before sending");
        }
        const testResponse = {
          //need the ok because that is what is being checked
          //false is here because if it is false the function should throw an error
          ok: false,
          //server receives JSON from the client, sends back JSON data that is then turned into a regular javascript object
          //json needs to be called because the server sends JSON data that must be turned into a regular javascript object
          //.json() exists on original response, as such it must exist here too
          json() {
            return new Promise((resolve, reject) => {
              //.json() is called, which returns a promise that resolves with the testResponseData
              resolve(testResponseData);
            });
          },
        };
        resolve(testResponse);
      });
    });
    const testData = { key: "testing" };
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
  });
});
