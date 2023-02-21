class DynamicArray {
  constructor(defaultSize = 4) {
    // Fill this out
    this.defaultSize = [...new Array(10)].map(() => null);
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    // Fill this out
    // You may not use any built-in JS array functions
    return this.data[index];
  }

  unshift(val) {
    // Fill this out
    // You may not use any built-in JS array functions
    for (let i = this.data.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
      if (this.data[i] !== undefined) {
        this.length++;
      }
    }
    this.data[0] = val;
    return this.data;
  }
}
let myArray = new DynamicArray();
myArray.data[0] = 99;
myArray.unshift(1);
myArray.unshift(3);
console.log(myArray.data);
console.log(new DynamicArray().capacity);
console.log(new DynamicArray().data instanceof Array);
console.log(new DynamicArray().data.length);
console.log(new DynamicArray().length);
module.exports = DynamicArray;
