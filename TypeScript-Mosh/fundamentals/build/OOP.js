"use strict";
class Account {
    constructor(id, owner, _balance, nickname) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
        this.nickname = nickname;
    }
    showId() {
        console.log(this.id);
    }
    showOwner() {
        console.log(this.owner);
    }
    get balance() {
        console.log(this._balance);
        return this._balance;
    }
    set balance(value) {
        if (value < 0) {
            throw new Error("Cannot deposit a negative or zero sum amount");
        }
        this._balance = value;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log("got to here");
            throw new Error("Amount cannot be negative or equal to zero");
        }
        this._balance += amount;
        return this._balance;
    }
}
const myAccount = new Account(1, "Gavin", 20000, "football");
myAccount.deposit(10000);
myAccount.balance;
console.log(myAccount);
if (myAccount instanceof Account) {
    console.log("this is how we do it!");
}
myAccount.balance = 30000000;
console.log(myAccount);
class SeatAssignment {
}
let seats = new SeatAssignment();
seats.A2 = "John";
seats["A1"] = "Gavin";
console.log(seats, "seats");
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    walk() {
        console.log("walk, walk, walk!");
    }
}
class Student extends Person {
    constructor(_studentId, firstName, lastName) {
        super(firstName, lastName);
        this._studentId = _studentId;
    }
    get studentId() {
        console.log(this._studentId);
        return `${this._studentId}`;
    }
    beAStudent() {
        console.log(`I'M A STUDENT WEEEEE!`);
    }
}
const Gavin = new Student(69, "Gavin", "Coulson");
Gavin.walk();
Gavin.studentId;
Gavin.beAStudent();
class Teacher extends Person {
    get fullName() {
        return `Professor ${super.fullName}`;
    }
}
let teacher = new Teacher("Gal", "Ivgi");
console.log(teacher.fullName);
function printNames(people) {
    for (let person of people) {
        console.log(`in for loop ${person.fullName}`);
    }
}
printNames([Gavin, teacher]);
class Calendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() { }
    removeEvent() { }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log("adding event");
    }
    removeEvent() {
        console.log("removing event");
    }
    sync() {
        console.log("syncing calendar");
    }
}
//# sourceMappingURL=OOP.js.map