function translatePigLatin(str, charPos = 0) {
  return ["a", "e", "i", "o", "u"].includes(str[0])
    ? str + (charPos === 0 ? "way" : "ay")
    : charPos === str.length
    ? str + "ay"
    : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}
