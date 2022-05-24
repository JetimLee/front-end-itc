"use strict";
var _a;
const john = { name: "John Smith", age: 29, occupation: "Lawyer" };
const kate = { name: "Kate Müller", age: 28 };
const users = [john, kate];
const myPet = {
    fly: () => {
        console.log("I am flying!");
    },
};
myPet.fly();
function getUser() {
    console.log("getting user!");
    return john;
}
let user = getUser();
console.log((_a = user.address) === null || _a === void 0 ? void 0 : _a.street);
let bar = () => { };
let foo = "";
let x = foo !== null && foo !== void 0 ? foo : bar();
//# sourceMappingURL=advancedTypes.js.map