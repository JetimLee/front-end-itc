import "dotenv/config";
//async errors
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import express from "express";

const app = express();

//middleware
app.use(express.json());

//routes

app.get("/", (req, resp) => {
  resp.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>");
});

app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
