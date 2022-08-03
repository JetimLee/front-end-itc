function Shape() {}
Shape.prototype.duplicate = function () {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}
Circle.prototype.draw = function () {
  console.log("draw");
};
Circle.prototype = Object.create(Shape.prototype);

s = new Circle(1);
console.log(s);
console.log(Object.getPrototypeOf(s));
s.duplicate();
