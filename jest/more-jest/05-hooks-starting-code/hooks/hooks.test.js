import {
  it,
  expect,
  describe,
  beforeEach,
  afterAll,
  afterEach,
  beforeAll,
} from "vitest";

import { User } from "./hooks";

//can annotate tests with .concurrent to run a selection of tests concurrently
//can also annotate the whole suite with .concurrent to run that suite concurrently with all other tests
describe("the User class", () => {
  let testEmail = "test@test.com";
  let user = new User(testEmail);
  //the different testing hooks
  afterAll(() => {
    console.log("after all");
  });
  beforeEach(() => {
    console.log("before each");
    user = new User(testEmail);
    testEmail = "test@test.com";
  });
  beforeAll(() => {
    console.log("before all");
  });
  afterEach(() => {
    console.log("after each");
  });

  it.concurrent("should update the email", () => {
    const newTestEmail = "test2@test.com";

    user.updateEmail(newTestEmail);

    expect(user.email).toBe(newTestEmail);
  });
  it("should clear the email", () => {
    user.clearEmail();

    expect(user.email).toBe("");
  });

  it.concurrent("should have an email property", () => {
    const user = new User(testEmail);

    expect(user).toHaveProperty("email");
  });

  it("should store the provided email value", () => {
    expect(user.email).toBe(testEmail);
  });

  it("should still have an email property after clearing the email", () => {
    user.clearEmail();

    expect(user).toHaveProperty("email");
  });
});
