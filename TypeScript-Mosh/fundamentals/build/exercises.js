"use strict";
var _a;
const gavin = {
    id: 1,
    name: "Gavin",
    retire: (date) => {
        console.log(date);
    },
};
gavin.retire(new Date());
console.log(gavin.retire);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
let intersectingWeight;
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    return name.toUpperCase();
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let customers = [getCustomer(1), getCustomer(2)];
console.log(customers === null || customers === void 0 ? void 0 : customers[0], customers === null || customers === void 0 ? void 0 : customers[1000]);
let speed = null;
let ride = { speed: speed !== null && speed !== void 0 ? speed : 30 };
function render(document) {
    if (typeof document === "string") {
        document.toUpperCase();
    }
}
//# sourceMappingURL=exercises.js.map