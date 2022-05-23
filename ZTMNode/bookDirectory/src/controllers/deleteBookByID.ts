import { book, modifyBooks } from "../data/books";

//returns the updated books array
const deleteBookById = async (id: number, arr: book[]): Promise<book[]> => {
  const newBookList = arr.filter((book: book) => {
    if (book.id !== id) {
      return book;
    }
  });
  console.log(newBookList, "new books after deletion");
  const updatedBooks = await modifyBooks(newBookList);
  return updatedBooks;
};

export { deleteBookById };
