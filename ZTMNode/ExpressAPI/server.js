const express = require("express");

const friendsController = require("./controllers/friends.controller");
const messagesController = require("./controllers/messages.controller");

const app = express();
app.use(express.json());
app.use((req, res, next) => {
  const start = new Date();
  console.log(`${req.method} ${req.url} ${JSON.stringify(req.headers)}`);
  next();
  //actions go here
  const responseTime = new Date() - start;
  console.log(`Request took ${responseTime} ms`);
});

app.get("/", (req, resp) => {
  console.log("hello");
  resp.send("Hello from node");
});
app.get("/friends", friendsController.getFriends);
app.get("/friends/:id", friendsController.getFriendsByID);
app.get("/messages", friendsController.sendBasicRequest);
app.post("/messages", messagesController.createNewFriend);
const myPort = 4000;
app.listen(myPort, () => {
  console.log(`app running on ${myPort}`);
});
