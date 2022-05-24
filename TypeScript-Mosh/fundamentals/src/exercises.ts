type Employee = {
  id: number;
  name: string;
  retire: (date: Date) => void;
};

const gavin: Employee = {
  id: 1,
  name: "Gavin",
  retire: (date: Date) => {
    console.log(date);
  },
};
gavin.retire(new Date());
console.log(gavin.retire);

function kgToLbs(weight: number | string): number | string {
  //narrowing
  if (typeof weight === "number") {
    //do the conversion
    return weight * 2.2;
  }
  //end up here if the check fails

  return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

//intersection types

//technically impossible
let intersectingWeight: number & string;

//more realistic example
type Draggable = {
  drag: () => void;
};
type Resizable = { resize: () => void };

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

//literal types
type Quantity = 50 | 100;
type Metric = "cm" | "inch";
type Jewish = "Sephardi" | "Ashkenazi";
let quantity: Quantity = 50;

function greet(name: string): string {
  return name.toUpperCase();
}

//optional chaining
type Customer = { birthday?: Date };

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday?.getFullYear());
let customers = [getCustomer(1), getCustomer(2)];
console.log(customers?.[0], customers?.[1000]);

//nullish coaelscing operator

let speed: number | null = null;
//saying that so long as speed isn't null use speed, otherwise use default value
let ride = { speed: speed ?? 30 };

//type assertions
//do this when you know more about the object than the TS compiler, this will give you access to the stuff you need
//does not convert the object, purely for telling the compiler that we know more about the object
// let phone = <HTMLInputElement>document.getElementById("phone");

function render(document: unknown) {
  //the big problem with the any type is that it makes it become a type of anything, basically losing the TS advantages
  //type unknown will give you compilation errors, type any won't
  if (typeof document === "string") {
    //doesn't throw anything because the compiler knows it is of type string
    //if this is a custom class then we have to use instanceof
    document.toUpperCase();
  }
}
