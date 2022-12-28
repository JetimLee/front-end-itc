function myReplace(str, before, after) {
  let wordArray = str.split(" ");
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    if (word.toLowerCase() === before.toLowerCase()) {
      console.log(word);
      if (word[0] === word[0].toUpperCase()) {
        wordArray[i] = after[0].toUpperCase() + after.slice(1);
      } else {
        wordArray[i] = after[0].toLowerCase() + after.slice(1);
      }
    }
  }
  return wordArray.join(" ");
}

// myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(
  myReplace("Let us get back to more Coding", "Coding", "algorithms")
);
console.log(myReplace("Let us go to the store", "store", "mall"));
