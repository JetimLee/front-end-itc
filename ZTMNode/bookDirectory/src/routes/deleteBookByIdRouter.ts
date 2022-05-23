import { Router, Response, Request } from "express";
import { deleteBookById } from "../controllers/deleteBookByID";
import { book, getBooks } from "../data/books";

const deleteRouter = Router();
deleteRouter.delete(`/book/:id`, async (req: Request, resp: Response) => {
  console.log("delete router was hit!!!");
  const { id } = req.params;
  const booksArray: book[] = await getBooks();
  const idToNumber = parseFloat(id);
  const updatedBooks = await deleteBookById(idToNumber, booksArray);
  resp.send(updatedBooks);
});

export { deleteRouter };
