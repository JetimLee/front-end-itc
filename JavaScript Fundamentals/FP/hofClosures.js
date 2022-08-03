const hof = (fn) => fn(5);
console.log(
  hof(function a(x) {
    return x;
  })
);
//a hof is one that takes a function as a parameter or one that returns a function

//closure - mechanism for containing state, a function inside of a function is an example

const closure = function () {
  let count = 0;
  return function incremet() {
    count++;
    return count;
  };
};
console.log(closure());
let increment = closure();
console.log(increment());
console.log(increment());
console.log(increment());
