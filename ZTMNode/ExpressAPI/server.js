const express = require("express");

const friendsRouter = require("./routes/friends.router");
const messagesRouter = require("./routes/messages.router");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const start = new Date();
  console.log(
    `${req.method}${req.baseUrl} ${req.url} ${JSON.stringify(req.headers)}`
  );
  next();
  //actions go here
  const responseTime = new Date() - start;
  console.log(`Request took ${responseTime} ms`);
});

app.get("/", (req, resp) => {
  console.log("hello");
  resp.send("Hello from node");
});

app.use("/friends", friendsRouter);

app.use("/messages", messagesRouter);

const myPort = 4000;
app.listen(myPort, () => {
  console.log(`app running on ${myPort}`);
});
