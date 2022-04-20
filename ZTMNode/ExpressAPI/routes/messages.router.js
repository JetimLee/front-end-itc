const express = require("express");
const messagesController = require("../controllers/messages.controller");
const friendsController = require("../controllers/friends.controller");

const messagesRouter = express.Router();

messagesRouter.use((req, resp, next) => {
  console.log(req.ip, "messages router was hit, here is ip of machine");
  next();
});
messagesRouter.get("/", friendsController.sendBasicRequest);
messagesRouter.post("/", messagesController.createNewFriend);

module.exports = messagesRouter;
