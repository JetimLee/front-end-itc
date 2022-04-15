const express = require("express");
const res = require("express/lib/response");

const app = express();

const friends = [
  { id: 2, name: "matt2" },
  { id: 3, name: "michael" },
  { id: 4, name: "sean" },
  { id: 5, name: "james" },
  { id: 6, name: "sapir" },
  { id: 7, name: "matt" },
  { id: 0, name: "Player One" },
  { id: 1, name: "gavin" },
];
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
  console.log("messages was posted to");
});
const myPort = 4000;
app.listen(myPort, () => {
  console.log(`app running on ${myPort}`);
});
