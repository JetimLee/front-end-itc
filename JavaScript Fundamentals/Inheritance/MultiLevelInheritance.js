let myArray = [];
console.log(myArray);

function Circle(radius) {
  this.radius = radius;
  this.move = function () {
    this.draw();
    console.log("move");
  };
}
Circle.prototype.draw = function () {
  console.log(`draw ${this.radius}`);
};

const circle = new Circle(2);
console.log(circle);
circle.draw();
circle.move();
console.log(Object.keys(circle)); //accesses on the instance
for (let key in circle) console.log(key); //logs the instance plus the prototype
//own property won't go to the prototype properties, it accesses the object properties only

//NEVER EVER DO THIS
Array.prototype.shuffle = function () {
  //something
};
let person = { name: "Gavin" };
console.log(person);
console.log(Object.keys(person));
