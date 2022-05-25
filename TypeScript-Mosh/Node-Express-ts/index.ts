//good practice to install typescript when starting a node project since you don't know if a different dev will have ts already installed or not

import express, { Request, Response } from "express";
import { router } from "./routers/reminders";
const app = express();

app.use(router);

app.get("/", (req: Request, resp: Response): void => {
  resp.send("Hello Typescript");
});

app.listen(300, () => {
  console.log("server running on port 300");
});
