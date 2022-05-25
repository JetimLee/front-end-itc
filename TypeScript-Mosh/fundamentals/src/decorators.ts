//What are decorators?
//They are attributes that we apply to classes and their members
//Used a ton in Vue and Angular
//had to enable experimental decorators in the config file

// @Component - example of a decorator

//can do it like this or with a inheritance and classes

//class/inheritance example
// class Component {
//   insertInDom() {}
// }

function Pipe(constructor: Function) {
  console.log("pipe decorator called");
  constructor.prototype.pipe = true;
}

type ComponentOptions = { selector: string };
//decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Component decorator called");
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDom = () => {
      console.log("inserting the component into the dom");
    };
  };
}

//look up typescript decorators - method decorators for this
function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value as Function;
  descriptor.value = function (...args: any) {
    console.log("before!");
    original.call(this, ...args);
    console.log("after");
  };
}
class Personz {
  @Log
  say(message: string) {
    console.log(`Personz says ${message}`);
  }
}
let someone = new Personz();
someone.say("something says something");
//here pipe will be called before component
//similar to math f(g(x)) - g(x will be called before f*(g*x))
@Component({ selector: "#my-profile" })
@Pipe
class ProfileComponent {}

//access decorators

function Capitalize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  descriptor.get = function () {
    const result = original?.call(this);
    return typeof result === "string" ? result.toUpperCase() : result;
  };
}
class Persono {
  constructor(public firstName: string, public lastName: string) {}
  @Capitalize
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
let persono = new Persono("gavin", "coulson");
console.log(persono.fullName);

//property decorators

//property decorators are very similar to method decorators
function MinLength(length: number) {
  return (target: any, propertyName: string) => {
    let value: string;
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      set(newValue: string) {
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
  @MinLength(4)
  password: string;
  constructor(password: string) {
    this.password = password;
  }
}
//if you try to compile this an error will be thrown
// let usero = new Usero("lol");

//parameter decorators
//used mostly when creating a framework for other people

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};
const watchedParametrs: WatchedParameter[] = [];
function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParametrs.push({ methodName, parameterIndex });
}
class Vehicle {
  move(@Watch speed: number) {}
}
console.log(watchedParametrs);

function Sauce(sauce: string) {
  return (constructor: Function) => {
    constructor.prototype.sauce = sauce;
  };
}

@Sauce("pesto")
class Pizza {}
const myPizza = new Pizza();
console.log(myPizza);
