const { planets } = require("../../models/planets.model");
function getAllPlanets(req, resp) {
  console.log("get all planets called in server");
  resp.status(200).json(planets);
}

module.exports = { getAllPlanets };
