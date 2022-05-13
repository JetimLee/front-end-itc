const axios = require("axios");
const fetch = require("node-fetch");
const { getPeople } = require("./script2");
const url = "https://pokeapi.co/api/v2/pokemon";

describe("getPeople()", () => {
  it("calls pokeapi to get pokemon and return an object with the properties of count which has 1126 as its value and results", async () => {
    //expecting 3 assertions to be called
    expect.assertions(3);
    let result = await getPeople(fetch, url);
    expect(result.count).toBe(1126);
    expect(result).toHaveProperty("count");
    expect(result).toHaveProperty("results");
  });
  it("getPeople returns count and results", async () => {
    //good to expect how many assertions there will be with async code, this ensures that all assertions are called
    expect.assertions(4);
    const mockAxios = jest.fn().mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve({ count: 1126, results: [1, 2, 3, 4, 5] }),
      })
    );
    let results = await getPeople(mockAxios, url);
    expect(results).toHaveProperty("count");
    expect(results).toHaveProperty("results");
    expect(mockAxios.mock.calls.length).toBe(1);
    expect(mockAxios).toBeCalledWith(url);
  });
});
