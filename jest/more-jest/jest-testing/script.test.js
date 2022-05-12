const { googleDatabase, googleSearch } = require("./script");

describe("googleSearch()", () => {
  it("should return an array of 3 eleemnts given an empty input", () => {
    const input = "";
    let result = googleSearch("");
    expect(result).toEqual(googleDatabase.slice(0, 3));
  });
  it("should return an array that has a maximum of 3 items in it", () => {
    const input = "";
    let result = googleSearch(input);
    expect(result.length).toBeLessThanOrEqual(3);
  });
  it("should return matches for what was searched for", () => {
    const input = "g";
    let result = googleSearch(input);
    console.log(result);
    expect(result).toContain("girls.com");
    expect(result).toContain("ggw.com");
  });
});
