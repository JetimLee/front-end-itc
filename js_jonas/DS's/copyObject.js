const jessica = {
  firtName: "Jessica",
  lastName: "Bridge",
  age: 19,
  family: ["Alice", "Bob"],
};

//this will create a shallow clone
const marriedJessica = Object.assign({}, jessica);
marriedJessica.lastName = "Coulson";

console.log(jessica, "before marriage");
console.log(marriedJessica, "after marriage");
