const fetchData = require("./async.js");

describe("async code", () => {
  it("should return correct todo", async () => {
    //how to handle async tests
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
  });
});
