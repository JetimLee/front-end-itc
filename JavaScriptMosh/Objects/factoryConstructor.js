const createAddress = (street, city, zipCode) => {
  const address = { street, city, zipCode };
  return address;
};
createAddress("3757 Cedarlodge St.", "Boulder", "80301");

function Address(street, city, zipCode) {
  (this.street = street), (this.city = city), (this.zipCode = zipCode);
}
const newAddress = new Address("3757 Cedarlodge St.", "Boulder", "80301");

const anotherAddress = new Address("3757 Cedarlodge Sts.", "Boulder", "80301");

function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}
console.log(areEqual(newAddress, anotherAddress));
function areSame(address1, address2) {
  return address1 === address2;
}
console.log(areSame(newAddress, anotherAddress));
