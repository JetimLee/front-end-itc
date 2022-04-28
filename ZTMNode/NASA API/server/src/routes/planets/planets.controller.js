const { getAllPlanets } = require("../../models/planets.model");
function httpGetAllPlanets(req, resp) {
  console.log("get all planets called in server");
  resp.status(200).json(getAllPlanets());
}

module.exports = { httpGetAllPlanets };
