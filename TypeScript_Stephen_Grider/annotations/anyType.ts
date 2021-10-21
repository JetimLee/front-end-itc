//examples of type annotations

//when to use annotations
//function that returns any type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);
//need to avoid variables with type any at all costs
//any type means TS has no idea what is going on, so it won't be able to check for correct property references
//type inference only works when you do variable declaration and initialization on the same line
let words: string[] = ["red", "green", "blue"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}
console.log(foundWord);
