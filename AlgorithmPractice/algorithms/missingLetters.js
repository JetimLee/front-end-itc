function fearNotLetter(str) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 97);

  const alphabet = alpha.map((x) => String.fromCharCode(x));
  let alphabetMap = {};
  for (let i = 0; i < alphabet.length; i++) {
    alphabetMap[alphabet[i]] = i;
  }
  for (let i = alphabetMap[str[0]]; i < alphabet.length; i++) {
    if (str.includes(alphabet[i]) === false) {
      return alphabet[i];
    }
  }
}

console.log(fearNotLetter("stvwx"));
