class Account {
  constructor(
    readonly id: number,
    readonly owner: string,
    private _balance: number,
    readonly nickname?: string
  ) {}
  showId(): void {
    console.log(this.id);
  }
  showOwner(): void {
    console.log(this.owner);
  }
  get balance(): number {
    console.log(this._balance);
    return this._balance;
  }

  //wouldn't really want this in an actual bank app since you could set the amount to something you didn't mean to
  set balance(value: number) {
    if (value < 0) {
      throw new Error("Cannot deposit a negative or zero sum amount");
    }
    this._balance = value;
  }
  deposit(amount: number): number {
    if (amount <= 0) {
      console.log("got to here");
      throw new Error("Amount cannot be negative or equal to zero");
    }
    //record a transaction
    this._balance += amount;
    return this._balance;
  }
}
const myAccount = new Account(1, "Gavin", 20_000, "football");
myAccount.deposit(10_000);
myAccount.balance;
console.log(myAccount);
if (myAccount instanceof Account) {
  console.log("this is how we do it!");
}
myAccount.balance = 30000000;
console.log(myAccount);

//index signatures
//these are used for creating properties dynamically
class SeatAssignment {
  //index signature property
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A2 = "John";
seats["A1"] = "Gavin";
console.log(seats, "seats");

//static members
//static property is a property that belongs to a class and not an object
//only have one instance of that property in memory
//good for when you need global property that will be shared
class Ride {
  private static _activeRides: number = 0;
  start() {
    //need to refer to the class since an instance of the ride class wouldn't have an _activeRides property
    Ride._activeRides++;
  }
  stop() {
    Ride._activeRides--;
  }
  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();

ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);
//both will log 1 since they're separate objects in memory

//inheritance
class Person {
  constructor(protected firstName: string, protected lastName: string) {}
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  walk(): void {
    console.log("walk, walk, walk!");
  }
}

class Student extends Person {
  constructor(private _studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }
  get studentId() {
    console.log(this._studentId);
    return `${this._studentId}`;
  }
  public beAStudent() {
    console.log(`I'M A STUDENT WEEEEE!`);
  }
}

const Gavin: Student = new Student(69, "Gavin", "Coulson");

Gavin.walk();
Gavin.studentId;
Gavin.beAStudent();

class Teacher extends Person {
  override get fullName() {
    return `Professor ${super.fullName}`;
  }
}

//make principal class that extends person that logs out Principal infront of their first and last name

let teacher = new Teacher("Gal", "Ivgi");
console.log(teacher.fullName);

//polymorphism - many, forms - key deal in OOP

function printNames(people: Person[]) {
  for (let person of people) {
    console.log(`in for loop ${person.fullName}`);
  }
}

printNames([Gavin, teacher]);
