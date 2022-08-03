import { modifyBooks, getBooks, book } from "../data/books";

const updateBooks = async (id: number, updatedBook: book): Promise<book[]> => {
  console.log("what was received in update books \n", id, updatedBook);
  const bookList = await getBooks();
  const updatedBookList = bookList.map((book: book) => {
    if (book.id === id) {
      return { ...book, author: updatedBook.author, title: updatedBook.title };
    }
    return book;
  });
  const updatedBooks = await modifyBooks(updatedBookList);
  return updatedBooks;
};

export { updateBooks };
