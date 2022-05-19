//OOP and Functional Programming are traditionally seen as two sort of opposing concepts of how to create programs, think Scheme vs Java. However they don't have to be opposing paradigms.
//in JS, you can use both OOP and functional programming concepts due to its creator being inspired by both Sceheme and Java

// const elf = {
//   name: "Nymphadora",
//   weapon: "bow",
//   attack() {
//     return `attack with ${this.weapon}`;
//   },
// };
// console.log(elf.attack());

const elfFunctions = {
  attack() {
    return `attack with ${this.weapon}`;
  },
};
function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}
const gavin = createElf("gavin", "big guns");
// gavin.attack = elfFunctions.attack;
//above is a lot of manual work, better to use Object.create()

console.log(gavin.attack());
