const friends = require("../models/friends.model");

function createNewFriend(req, resp) {
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
}

module.exports = { createNewFriend };
