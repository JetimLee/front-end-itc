const express = require("express");
const cors = require("cors");

const planetsRouter = require("./routes/planets/planets.router");
const { loadPlanetsData } = require("./models/planets.model");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", planetsRouter);

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
