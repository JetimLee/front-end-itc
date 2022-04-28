const express = require("express");
const { httpGetAllLaunches } = require("./launches.controller");

const launchesRouter = express.Router();
debugger;
launchesRouter.get("/launches", httpGetAllLaunches);

module.exports = launchesRouter;
