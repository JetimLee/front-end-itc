const express = require("express");
const friends = require("./friends");

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
app.get("/friends", (req, resp) => {
  resp.json(friends);
});
app.get("/friends/:id", (req, resp) => {
  console.log("friends with id hit");
  //need to do this because id is a type of number whereas the param coming in is a string
  const friendId = Number(req.params.id);
  console.log(friendId);
  const friend = friends.find((friendObj) => friendObj.id === friendId);
  if (friend) {
    resp.status(200).json(friend);
  } else {
    resp.status(404).json({ error: "Friend does not exist" });
  }
});
app.get("/messages", (req, resp) => {
  resp.send("<ul><li>Hello Gavin from messages</li></ul>");
});
app.post("/messages", (req, resp) => {
  console.log(req.body);
  const { name } = req.body;
  if (!name) {
    resp.status(400).send({ error: "A required data field wasn't sent" });
    return;
  }
  const newFriend = { name, id: friends.length };
  friends.push(newFriend);
  console.log("messages was posted to");
  resp.json(friends);
});
const myPort = 4000;
app.listen(myPort, () => {
  console.log(`app running on ${myPort}`);
});
