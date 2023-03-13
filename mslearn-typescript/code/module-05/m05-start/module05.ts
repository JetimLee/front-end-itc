/*  Module 5: Declare and instantiate classes in TypeScript
    Lab Start  */

/*  EXERCISE 1 */

class BuildArray {
  // TODO Define the properties
  private _items: number;
  private _sortOrder: "ascending" | "descending";

  constructor(items: number, sortOrder: "ascending" | "descending") {
    this._items = items;
    this._sortOrder = sortOrder;
  }

  public getItems(): number {
    return this._items;
  }
  public setItems(n: number) {
    if (n < 0) {
      throw new Error("Numbers cannot be less than 0");
    }
    this._items = n;
  }
  public getSortOrder(): string {
    return this._sortOrder;
  }
  public setSortOrder(order: "ascending" | "descending") {
    let options = ["ascending", "descending"];
    if (options.indexOf(order) === -1) {
      throw new Error("An invalid sort order was given to setSortOrder");
    }
    this._sortOrder = order;
  }

  // TODO Define the constructor

  // TODO Define the accessors

  // TODO Define the methods
  private sortDescending = (a: number, b: number) => {
    if (a > b) {
      return -1;
    } else if (b > a) {
      return 1;
    } else {
      return 0;
    }
  };
  private sortAscending = (a: number, b: number) => {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  };
  public buildArray(): number[] {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    for (let counter = 0; counter < this._items; counter++) {
      nextNumber = Math.ceil(Math.random() * (100 - 1));
      if (randomNumbers.indexOf(nextNumber) === -1) {
        randomNumbers.push(nextNumber);
      } else {
        counter--;
      }
    }
    if (this._sortOrder === "ascending") {
      return randomNumbers.sort(this.sortAscending);
    } else {
      return randomNumbers.sort(this.sortDescending);
    }
  }
}

let testArray1 = new BuildArray(12, "ascending");
let testArray2 = new BuildArray(8, "descending");

console.log(testArray1.buildArray());
console.log(testArray2.buildArray());
