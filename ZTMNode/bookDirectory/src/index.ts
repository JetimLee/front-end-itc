import express from "express";
import { router } from "./routes/getBookByIdRouter";
import { deleteRouter } from "./routes/deleteBookByIdRouter";
import { getAllBooksRouter } from "./routes/getAllBooksRouter";
import { addBookRouter } from "./routes/addBookRouter";
import { updateBooksRouter } from "./routes/updateBooksRouter";
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(updateBooksRouter);
app.use(addBookRouter);
app.use(getAllBooksRouter);
app.use(deleteRouter);
app.use(router);

app.listen(3000, () => {
  console.log("book depository server running on port 3000");
});
