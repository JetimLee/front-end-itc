import { Router, Response, Request } from "express";

const router = Router();
router.get("/login", (req: Request, resp: Response) => {
  resp.send(`<form method="POST">
  <div>
  <label>Email</label>
  <input name="email"/>
  </div>
  <div>
  <label>Password</label>
  <input name="password" type="password"/>
  </div>
  <button>Submit</button>
  </form>`);
});

router.post("/login", (req: Request, resp: Response) => {
  const { email, password } = req.body;
  console.log(email, password);
  resp.send(email + password);
});
export { router };
