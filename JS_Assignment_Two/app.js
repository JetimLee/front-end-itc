const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const Datastore = require("nedb");
const { response } = require("express");
const db = new Datastore({ filename: "./storage.db" });
db.loadDatabase();

function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return (memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo));
}

function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

app.get("/fibonacci/:number", async (req, res) => {
  console.log(req.params);
  await wait(600);
  console.log("getting");
  const number = +req.params.number;
  console.log(number);
  if (number === 42) {
    return res.status(400).send({ message: "42 is the number of life" });
  }
  if (number > 50) {
    return res.status(400).send({ message: "Number cannot be bigger than 50" });
  }
  if (number < 1) {
    return res.status(400).send({ message: "Number cannot be smaller than 1" });
  }
  const result = fibonacci(number);
  const obj = { number, result, createdDate: Date.now() };

  // db.insert(obj);
  res.status(200).send(obj);

  // db.insert(obj, (err) => {
  //   if (err) {
  //     return res.status(500).send(err);
  //   } else {
  //     console.log("sending");
  //     console.log(`sending ${obj.result}`);
  //     return res.status(200).send(obj);
  //   }
  // });
});

app.get("/getFibonacciResults", async (req, res) => {
  await wait(600);
  db.find({}, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ results: docs });
    }
  });
});

const PORT = 5050;
app.listen(5050, () => {
  console.log(`App listening on port ${PORT}`);
  console.log("Press Ctrl+C to quit.");
});
