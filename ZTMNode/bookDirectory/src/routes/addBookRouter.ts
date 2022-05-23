//this router will send the updated array with the newly added book object
//need the right controller which will handle the logic
import { Router, Response, Request } from "express";
import { addBook } from "../controllers/addBook";
import { book } from "../data/books";
import { createRandomId } from "../controllers/createRandomId";

const addBookRouter = Router();
addBookRouter.post(`/book`, async (req: Request, resp: Response) => {
  console.log("add book router was hit!!!");
  console.log(req.body);
  const { title, author } = req.body;
  const newBook: book = { title, author, id: createRandomId() };
  const updatedBooks = addBook(newBook);
  resp.send(updatedBooks);
});

export { addBookRouter };
