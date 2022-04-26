const express = require("express");
const cors = require("cors");
const path = require("path");

const planetsRouter = require("./routes/planets/planets.router");
const { loadPlanetsData } = require("./models/planets.model");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use("/", planetsRouter);
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
//check this - should be the catch all
app.get("*", (req, resp) => {
  resp.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

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
