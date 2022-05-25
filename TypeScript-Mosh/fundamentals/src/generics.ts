class KeyValuePair<T, U> {
  constructor(public key: T, public value: U) {}
}
let pair = new KeyValuePair(1, "Apple");
let newPair = new KeyValuePair<string, string>("1", "2");

//generic class example
//generic classes in typescript are the same as template classes in C++

//generic function

class ArrayUtils {
  wrapInArray<T>(...args: T[]): T[] {
    return args;
  }
}

let utils = new ArrayUtils();
let myNumbers = utils.wrapInArray(1, 2, 3, 4, 5);
let myOtherNumbers = utils.wrapInArray("3");
console.log(myNumbers);

//generic interfaces
//this example is with calling a website
//http://mywebsite.com/users
//may get data, may not and in the event you don't get the data, you'll get an error
interface Result<T> {
  data?: T | null;
  error?: string | null;
}

//generic function
function fetch<T>(url: string): Result<T> {
  () => {
    console.log(url);
  };
  return { data: null, error: null };
}

interface Userz {
  username: string;
}

let result = fetch<User>("http://google.com");
// console.log(result.data?.name);

//generic constraints
//could also slam an interface into here or class
// function echo<T extends number | string>(value: T): T {
//   return value;
// }
// echo(1);

//extending generic classes
interface Product {
  name: string;
  price: number;
  category?: string;
}

//see more about utility types
//type mapping
type ReadOnlyProduct = {
  readonly //index signature
  //keyof
  [Property in keyof Product]: Product[Property];
};
type ReadOnly<T> = {
  readonly [k in keyof T]: T[k];
};
type OptionalProduct<T> = {
  [Property in keyof T]?: T[Property];
};
type NullableProduct<T> = {
  [K in keyof T]: T[K] | null;
};
let otherPrduct: ReadOnlyProduct = { name: "a", price: 3 };

class Store<T> {
  protected _objects: T[] = [];
  add(obj: T): void {
    this._objects.push(obj);
  }
  //the property that you pass here must be a key on the generic obj that is being passed in
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
let myStore = new Store<Product>();
myStore.add({ name: "a", price: 1 });
const value = myStore.find("name", "a");
console.log("value", value);
//3 different scenarios in dealing with generic classes

//need to pass on the generic to the class that is extending the generic class, otherwise you'll get a compilation error
class CompressibleStore<T> extends Store<T> {
  compress() {}
}

//here the generic type is being restricted
class SearchableStore<T extends Product> extends Store<T> {
  findProduct(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}

//fixing type parameters
//don't want this store to be generic, want it to deal with only objects that are Product
class ProductStore extends Store<Product> {
  filterByCategory(category: string): Product[] {
    return this._objects.filter((product) => product.category === category);
  }
}

let store = new CompressibleStore<Product>();
