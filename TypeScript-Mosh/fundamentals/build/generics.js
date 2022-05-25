"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePair(1, "Apple");
let newPair = new KeyValuePair("1", "2");
class ArrayUtils {
    wrapInArray(...args) {
        return args;
    }
}
let utils = new ArrayUtils();
let myNumbers = utils.wrapInArray(1, 2, 3, 4, 5);
let myOtherNumbers = utils.wrapInArray("3");
console.log(myNumbers);
function fetch(url) {
    () => {
        console.log(url);
    };
    return { data: null, error: null };
}
let result = fetch("http://google.com");
let otherPrduct = { name: "a", price: 3 };
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find((obj) => obj[property] === value);
    }
}
let myStore = new Store();
myStore.add({ name: "a", price: 1 });
const value = myStore.find("name", "a");
console.log("value", value);
class CompressibleStore extends Store {
    compress() { }
}
class SearchableStore extends Store {
    findProduct(name) {
        return this._objects.find((obj) => obj.name === name);
    }
}
class ProductStore extends Store {
    filterByCategory(category) {
        return this._objects.filter((product) => product.category === category);
    }
}
let store = new CompressibleStore();
//# sourceMappingURL=generics.js.map