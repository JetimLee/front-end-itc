"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Pipe(constructor) {
    console.log("pipe decorator called");
    constructor.prototype.pipe = true;
}
function Component(options) {
    return (constructor) => {
        console.log("Component decorator called");
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDom = () => {
            console.log("inserting the component into the dom");
        };
    };
}
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log("before!");
        original.call(this, ...args);
        console.log("after");
    };
}
class Personz {
    say(message) {
        console.log(`Personz says ${message}`);
    }
}
__decorate([
    Log
], Personz.prototype, "say", null);
let someone = new Personz();
someone.say("something says something");
let ProfileComponent = class ProfileComponent {
};
ProfileComponent = __decorate([
    Component({ selector: "#my-profile" }),
    Pipe
], ProfileComponent);
function Capitalize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === "string" ? result.toUpperCase() : result;
    };
}
class Persono {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Persono.prototype, "fullName", null);
let persono = new Persono("gavin", "coulson");
console.log(persono.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length) {
                    throw new Error(`${propertyName} should be at least ${length}`);
                }
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class Usero {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], Usero.prototype, "password", void 0);
const watchedParametrs = [];
function Watch(target, methodName, parameterIndex) {
    watchedParametrs.push({ methodName, parameterIndex });
}
class Vehicle {
    move(speed) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
console.log(watchedParametrs);
function Sauce(sauce) {
    return (constructor) => {
        constructor.prototype.sauce = sauce;
    };
}
let Pizza = class Pizza {
};
Pizza = __decorate([
    Sauce("pesto")
], Pizza);
const myPizza = new Pizza();
console.log(myPizza);
//# sourceMappingURL=decorators.js.map