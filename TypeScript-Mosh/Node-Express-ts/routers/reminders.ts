import { Router, Request, Response } from "express";
const router = Router();

router.get("/todos", (req: Request, resp: Response) => {
  resp.send("hello from router");
});

export { router };
