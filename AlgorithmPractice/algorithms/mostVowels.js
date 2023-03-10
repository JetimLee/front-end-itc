function mostVowels(sentence) {
  let words = sentence.split(" ");
  let vowels = "aeiou";
  let vowelCount = 0;
  let wordWithMostValues = "";
  for (let word of words) {
    let mostVowelWordContender = {};
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i])) {
        if (mostVowelWordContender.hasOwnProperty(word[i])) {
          mostVowelWordContender[word[i]] += 1;
        } else {
          mostVowelWordContender[word[i]] = 1;
        }
      }
    }
    if (Object.keys(mostVowelWordContender).length > vowelCount) {
      vowelCount = Object.keys(mostVowelWordContender).length;
      wordWithMostValues = word;
    }
  }
  return wordWithMostValues;
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
