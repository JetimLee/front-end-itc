const rest = new Map();
//maps are very similar to objects, except their key/values can be of any type
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
//would have to set a property with an array as a property like this
console.log(rest);
const arr = [1, 2];
rest.set(arr, "test");

//calling the set method returns the updated map
console.log(rest.get(arr));

const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct"],
  [false, "Try again"],
]);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (isNaN(parseInt(key)) === false) {
    console.log(`Answer ${key}: ${value}`);
  }
}
