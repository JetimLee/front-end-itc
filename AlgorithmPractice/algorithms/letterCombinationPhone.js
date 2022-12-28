/**
 * @param {string} digits
 * @return {string[]}
 */
let letterCombinations = function (digits) {
  if (!digits.length) return [];

  let map = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  function permute(string, index) {
    if (index === digits.length) {
      result.push(string);
      return;
    }

    for (let x of map[digits[index]]) {
      permute(string + x, index + 1);
    }
  }
  permute("", 0);
  return result;
};
