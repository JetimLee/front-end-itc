import { Router, Response, Request } from "express";
import { book, getBooks } from "../data/books";

const getAllBooksRouter = Router();
getAllBooksRouter.get(`/book`, async (req: Request, resp: Response) => {
  console.log("router was hit!!!");
  const booksArray: book[] = await getBooks();
  resp.send(booksArray);
});

export { getAllBooksRouter };
