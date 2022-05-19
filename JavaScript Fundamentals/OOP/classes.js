class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `Attack with ${this.weapon}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  sayType() {
    console.log(this.type);
  }
}
class Ogre extends Character {
  constructor(name, weapon, skinColor) {
    super(name, weapon);
    this.skinColor = skinColor;
  }
  threaten() {
    console.log(
      `I AM AN OGRE WITH ${this.skinColor.toString().toUpperCase()} SKIN! RUN!`
    );
  }
}
const gavin = new Elf("gavin", "cloth", "silk");
const shrek = new Ogre("Shrek", "log", "green");
console.log(shrek);
gavin.sayType();
console.log(gavin.attack());
shrek.threaten();
//instance is creating a version of a class - prototypical inheritance in JS
console.log(shrek instanceof Ogre);
