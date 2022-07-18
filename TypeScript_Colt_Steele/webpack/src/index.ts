console.log("FROM INDEX FILE!!!!!!!");

import { Dog } from "./Dog";
import { ShelterDog } from "./ShelterDog";
import { add, divide, multiply } from "./utils";

const elton = new Dog("dog", "Aussie", 0.5);
const buffy = new ShelterDog("Buffy", "Pitbull", 5, "Desert Springs");

elton.bark();

console.log(add(4, 5));
console.log(divide(4, 5));
console.log(multiply(4, 5));
