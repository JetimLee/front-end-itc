import express from "express";
import { router } from "./routes/getBookByIdRouter";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(router);

app.listen(3000, () => {
  console.log("book depository server running on port 3000");
});
