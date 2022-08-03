function capitalize(str) {
  return str
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capitalize("look, it is working!"));
console.log(capitalize("look,"));
