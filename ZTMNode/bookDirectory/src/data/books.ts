interface book {
  author: string;
  id: number;
  title: string;
}
const book1: book = { author: "Leo Tolstoy", title: "Anna Karenina ", id: 1 };
const book2: book = {
  author: "Gustave Flaubert",
  title: "Madame Bovary",
  id: 2,
};
const book3: book = { author: "Leo Tolstoy", title: "War and Peace", id: 3 };
let bookDirectory = [book1, book2, book3];

const getBooks = async () => {
  const getBooksPromise = new Promise<book[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(bookDirectory);
    }, 1000);
  });
  return getBooksPromise;
};
const modifyBooks = async (arr: book[]): Promise<book[]> => {
  console.log(`Array of books received in modify books \n`, arr);
  const getBooksPromise = new Promise<book[]>((resolve, reject) => {
    setTimeout(() => {
      resolve((bookDirectory = arr));
    }, 1000);
  });
  return getBooksPromise;
};

export { getBooks, book, modifyBooks };
