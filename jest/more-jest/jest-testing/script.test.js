const { googleSearch } = require("./script");

describe("googleSearch()", () => {
  //mocking the db here because you wouldn't actually bring in the whole DB
  let dbMock = [
    "cats.com",
    "girls.com",
    "soup.com",
    "soupy.com",
    "ggw.com",
    "empyreanmed.com",
    "salads.com",
    "flowers.com",
  ];
  it("should return an array of 3 eleemnts given an empty input", () => {
    const input = "";
    let result = googleSearch(input, dbMock);
    expect(result).toEqual(dbMock.slice(0, 3));
  });
  it("should return an array that has a maximum of 3 items in it", () => {
    const input = "";
    let result = googleSearch(input, dbMock);
    expect(result.length).toBeLessThanOrEqual(3);
  });
  it("should return matches for what was searched for", () => {
    const input = "g";
    let result = googleSearch(input, dbMock);
    console.log(result);
    expect(result).toContain("girls.com");
    expect(result).toContain("ggw.com");
  });
  it("should return an empty array if there are no matches", () => {
    const input = "zebrasyes.com";
    let result = googleSearch(input, dbMock);
    expect(result).toEqual([]);
  });
});
