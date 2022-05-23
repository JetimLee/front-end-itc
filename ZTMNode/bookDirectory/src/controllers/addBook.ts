import { modifyBooks, getBooks } from "../data/books";
import { book } from "../data/books";

const addBook = async (book: book): Promise<book[]> => {
  console.log("new book in add book \n", book);
  const currentBooks = await getBooks();
  const newBookList = [...currentBooks, book];
  const updatedList = await modifyBooks(newBookList);
  return updatedList;
};

export { addBook };
