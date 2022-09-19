const isPangram = (sentence) => {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let joinedSentence = sentence
    .split("")
    .filter((char) => char !== " ")
    .join("")
    .toLowerCase();
  for (let i = 0; i < alphabet.length; i++) {
    if (joinedSentence.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  return true;
};

console.log(isPangram("som    me    th    ng"));
console.log(isPangram("The five boxing wizards jump quickly"));
console.log(isPangram("The quick brown fox jumps over the lazy dog"));
console.log(isPangram("The five boxing wizards jump quick"));
