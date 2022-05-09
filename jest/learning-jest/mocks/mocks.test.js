const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log("logging results", results);
  return results.data;
};

const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

describe("mock callback", () => {
  it("should mock a callback", () => {
    const mockCalledBack = jest.fn((x) => 42 + x);
    forEach([0, 1], mockCalledBack);

    expect(mockCalledBack.mock.calls.length).toBe(2);
    expect(mockCalledBack.mock.results[1].value).toBe(43);
  });
});

describe("mocked return", () => {
  it("mocks return", () => {
    const mock = jest.fn();
    mock.mockReturnValueOnce(true);

    const results = mock();
    expect(results).toBeTruthy();
  });
});

describe("mock axios", () => {
  it("mocks axios", async () => {
    //first parameter must be an object and then second must be the method
    jest.spyOn(axios, "get").mockReturnValueOnce({
      data: { id: 1, todo: "go to gym", completed: false },
    });
    const results = await fetchData(1);
    expect(results.todo).toBe("go to gym");
  });
});
