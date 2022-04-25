const apiURL = "http://localhost:8000";
async function httpGetPlanets() {
  console.log("http get planets called");
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  let response = await fetch(`${apiURL}/planets`);
  let data = await response.json();
  console.log(data);
  return data;
}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export { httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch };
