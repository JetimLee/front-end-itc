class Player {
  constructor(public readonly first: string, public readonly last: string) {
    (this.first = first), (this.last = last);
  }
  sayHello(): void {
    console.log(`Hello, my name is ${this.first} ${this.last}`);
  }
  private secretMethod(): void {
    console.log("SECRET METHO");
  }
  get fullName() {
    console.log(`${this.first} ${this.last}`);
    return `${this.first} ${this.last}`;
  }
}

//sort of hybrid, has data, class and is describing the build of an object
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log(`Hello!`);
  }
}
class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}
class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}
interface Printable {
  print(): void;
}
class Bible implements Printable {
  print() {
    console.log(`I'm a printable!`);
  }
}
const myBible = new Bible();
myBible.print();

const gavin = new Player("Gavin", "Coulson");
gavin.fullName;

const gavinC = new FullTimeEmployee("Gavin", "Coulson", 75000);
const jimmy = new PartTimeEmployee("Jimmy", "Neutron", 36, 2087);
console.log(gavinC.getPay());
console.log(jimmy.getPay());

function identity<T>(item: T): T {
  return item;
}
function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

function getRandomElement<T>(list: T[]): T {
  const randomElement = list[Math.floor(Math.random() * list.length)];
  return randomElement;
}
console.log(getRandomElement([1, 2, 3, 4, 5, 6]));

//can also set a default value for a generic

function makeList<T = number>(): T[] {
  return [];
}

const nums = makeList();

//generic class

interface Song {
  title: string;
  artist: string;
}
interface Video {
  title: string;
  create: string;
  resolution: string;
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}
const songs = new PlayList<Song>();
songs.add({ artist: "shakespeare", title: "a thing" });
console.log(songs.queue);
