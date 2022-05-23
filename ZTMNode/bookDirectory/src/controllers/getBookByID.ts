import { book } from "../data/books";
const getBookById = (id: number, arr: book[]) => {
  return arr.filter((book: book) => {
    if (book.id === id) {
      return book;
    }
  });
};

export { getBookById };
