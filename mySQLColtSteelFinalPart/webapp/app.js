const express = require("express");
const app = express();

var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jetimlee69!",
  database: "join_us",
});

app.get("/", function (req, res) {
  var q = "SELECT COUNT(*) as count FROM users";

  connection.query(q, function (error, results) {
    if (error) throw error;
    var msg = "We have " + results[0].count + " users";
    res.send(msg);
  });
});
app.get("/joke", (req, resp) => {
  resp.send("welcome to the joke page");
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
