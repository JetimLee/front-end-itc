const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const planetsRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");
const { loadPlanetsData } = require("./models/planets.model");

const app = express();
app.use(cors());
//combined is default in morgan, just explicitly setting it here
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
//uses /planets
app.use(planetsRouter);
//uses /launches
app.use(launchesRouter);
// /* matches any end point that isn't used above in the routes, it will send it to the application that is being served, in this case the react application with the router in it that is being served from the public folder.
app.get("/*", (req, resp) => {
  resp.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//check this - should be the catch all
// app.get("*", (req, resp) => {
//   resp.sendFile(path.join(__dirname, "..", "public", "index.html"));
// });

const port = process.env.PORT || 8000;

app.get("/", (req, resp) => {
  resp.send("hello from node");
});

const startServer = async () => {
  await loadPlanetsData();
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
};
startServer();
