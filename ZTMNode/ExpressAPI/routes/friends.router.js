const express = require("express");

const friendsController = require("../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.use((req, resp, next) => {
  console.log(req.ip, "ip address of machine that made the request");
  console.log("friends router was used!");
  next();
});
friendsRouter.get("", friendsController.getFriends);
friendsRouter.get("/:id", friendsController.getFriendsByID);

module.exports = friendsRouter;
