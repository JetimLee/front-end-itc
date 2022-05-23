import { updateBooks } from "../controllers/updateBooks";
import { Router, Response, Request } from "express";
import { book } from "../data/books";

const updateBooksRouter = Router();

updateBooksRouter.put("/book/:id", async (req: Request, resp: Response) => {
  const { title, author, id } = req.body;
  //would need to check here if a number actually comes through and if not, to handle that error
  const idToNumber = parseFloat(id);
  const updatedBook: book = { title, author, id: idToNumber };
  const updatedBooks = await updateBooks(idToNumber, updatedBook);
  resp.send(updatedBooks);
});
export { updateBooksRouter };
