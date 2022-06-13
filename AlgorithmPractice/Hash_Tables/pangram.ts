interface LooseObject {
  [key: string]: any;
}
export const isPangram = (phrase: string): boolean => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  console.log(alphabet);
  let pangramHashMap: LooseObject = {};
  for (let i = 0; i < phrase.length; i++) {
    if (pangramHashMap.hasOwnProperty(phrase[i])) {
      pangramHashMap[phrase[i].toUpperCase()] += 1;
    } else {
      pangramHashMap[phrase[i].toUpperCase()] = 1;
    }
  }
  const onlyLetters = Object.keys(pangramHashMap).filter((char) =>
    /[a-zA-z]/.test(char)
  );
  const sortedPangramHashMap = onlyLetters.sort();
  console.log(sortedPangramHashMap);

  return sortedPangramHashMap.every((element, i) => {
    return element === alphabet[i];
  });
};

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
