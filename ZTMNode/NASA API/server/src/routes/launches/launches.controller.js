//function that deals with getting all launches data is outsourced to a different file and used here
const { getAllLaunches } = require("../../models/launches.model");
function httpGetAllLaunches(req, resp) {
  console.log("get all launches called");

  return resp.status(200).json(getAllLaunches());
}
module.exports = { httpGetAllLaunches };
