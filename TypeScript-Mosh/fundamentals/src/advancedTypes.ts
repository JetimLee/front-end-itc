type User = {
  name: string;
  age: number;
  occupation?: string;
  address?: { street: string };
};

const john: User = { name: "John Smith", age: 29, occupation: "Lawyer" };
const kate: User = { name: "Kate Müller", age: 28 };
const users: User[] = [john, kate];

type Bird = { fly: () => void };
type Fish = { swim: () => void };

type Pet = Bird | Fish;

const myPet: Pet = {
  fly: () => {
    console.log("I am flying!");
  },
};
myPet.fly();

type Days = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";

function getUser(): User {
  console.log("getting user!");
  return john;
}
let user = getUser();
console.log(user.address?.street);

let bar = () => {};
//if foo isn't null do bar
let foo = "";
let x = foo ?? bar();
