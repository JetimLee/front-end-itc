const res = require("express/lib/response");
const friends = require("../models/friends.model");
const path = require("path");

function getFriendsByID(req, resp) {
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
}

function sendBasicRequest(req, resp) {
  // resp.send("<ul><li>Hello Gavin from messages</li></ul>");
  resp.sendfile(path.join(__dirname, "..", "public", "skimountain.jpg"));
}

function getFriends(req, resp) {
  resp.json(friends);
}
module.exports = { getFriends, sendBasicRequest, getFriendsByID };
