"use strict";
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
        (this.first = first), (this.last = last);
    }
    sayHello() {
        console.log(`Hello, my name is ${this.first} ${this.last}`);
    }
    secretMethod() {
        console.log("SECRET METHO");
    }
    get fullName() {
        console.log(`${this.first} ${this.last}`);
        return `${this.first} ${this.last}`;
    }
}
//sort of hybrid, has data, class and is describing the build of an object
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log(`Hello!`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
class Bible {
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
function identity(item) {
    return item;
}
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function getRandomElement(list) {
    const randomElement = list[Math.floor(Math.random() * list.length)];
    return randomElement;
}
console.log(getRandomElement([1, 2, 3, 4, 5, 6]));
//can also set a default value for a generic
function makeList() {
    return [];
}
const nums = makeList();
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
songs.add({ artist: "shakespeare", title: "a thing" });
console.log(songs.queue);
