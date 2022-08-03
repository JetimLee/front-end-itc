import { Router, Response, Request } from "express";
import { getBookById } from "../controllers/getBookByID";
import { book, getBooks } from "../data/books";

const router = Router();
router.get(`/book/:id`, async (req: Request, resp: Response) => {
  console.log("router was hit!!!");
  const { id } = req.params;
  const booksArray: book[] = await getBooks();
  const idToNumber = parseFloat(id);
  const foundBook = getBookById(idToNumber, booksArray);
  resp.send(foundBook);
});

export { router };
