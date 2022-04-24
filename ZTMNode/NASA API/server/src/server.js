const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, resp) => {
  resp.send("hello from node");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
