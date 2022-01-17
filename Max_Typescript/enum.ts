// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

const enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
  AUTHOR = "AUTHOR",
}

const person = {
  name: "Gavin",
  age: 28,
  hobbies: ["kung fu", "football", "cooking"],
  role: Role.ADMIN,
};
console.log(person);
