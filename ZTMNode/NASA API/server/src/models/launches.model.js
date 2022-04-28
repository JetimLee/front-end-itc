const launches = new Map();
//a map allows you to map any key type to any value type, so it's a pretty cool JS data structure

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

//.values() gives the values iterable thing that can be used
//.values() is not something that can be sent with json, it has to be turned into a javascript object first.
//Array.from will make an array from the values in the map

//a good design pattern is to have the functions that deal with accessing the logic outsourced and not directly in the controller file.

function getAllLaunches() {
  console.log("get all launches was used in the launches model");
  return Array.from(launches.values());
}

module.exports = { getAllLaunches };
