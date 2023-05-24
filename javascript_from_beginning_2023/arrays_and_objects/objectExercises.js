// # Object Challenge

// ### Step 1

// Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`. Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.
const library = [
  {
    title: "Harry Potter and the Goblet of Fire",
    author: "JK Rowling",
    status: { own: true, reading: false, read: true },
  },
  {
    title: "Harry Potter and the Sorcerors Stone",
    author: "JK Rowling",
    status: { own: true, reading: false, read: false },
  },
  {
    title: "Lord of the Rings: Return of the King",
    author: "Tolkien",
    status: { own: true, reading: false, read: false },
  },
];

// ### Step 2

// You finished reading all of the books. Set the `read` value for all of them to `true`. Do not edit the initial object. Set the values using dot notation.
library.forEach((book) => {
  book.status.read = true;
});
console.log(library);
// ### Step 3

// Destructure the title from the first book and rename the variable to `firstBook`
let { title: firstBook } = library[0];
console.log(firstBook);

// ### Step 4

// Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.

const JSONLibrary = JSON.stringify(library);
console.log(JSONLibrary);
