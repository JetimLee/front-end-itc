function sum(a: number, b: number): number {
  console.log(a + b);
  return a + b;
}
sum(1, 2);

//TS has all of the types available to it from JS and more, like Tuples

let basket: [string, number] = ["something", 69];

//enums are great for named constants

enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

let sizeName: string = Size[2];
let sizeNumber: number = Size.Small;
console.log(sizeName, "size name");

//type assertion means i can bypass the compiler, you tell it what type the thing is

interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as RobotArmy;
//you'll end up with undefined
console.log(dog.count, "dog count");

class Animal {
  sing: string = "lalalal";
  constructor(public name: string) {}
  singSong(): void {
    console.log(this.sing);
  }
  sayName(): void {
    console.log(this.name);
  }
}

let myDog = new Animal("david");
myDog.singSong();
myDog.sayName();
