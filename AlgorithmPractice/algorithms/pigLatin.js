function translatePigLatin(str) {
  let lengthOfString = str.length;
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(str[0].toLowerCase())) {
    return str + "way";
  } else {
    console.log("move consonant");
  }
}

translatePigLatin("consonant");
translatePigLatin("algorithm");
