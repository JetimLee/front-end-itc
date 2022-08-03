function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let numberOfVowels = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
}
