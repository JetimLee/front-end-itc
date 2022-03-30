//setters - mutate objects
//getters - access properties

const person = {
  firstName: "Gavin",
  lastName: "Coulson",
  get fullName() {
    console.log(`${this.firstName} ${this.lastName} is the full name`);
  },
  set fullName(value) {
    const nameParts = value.split(" ");
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  },
};
person.fullName;

person.fullName = "Jim Crazypants";

person.fullName;
