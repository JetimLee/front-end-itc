const EventEmitter = require("events");
//creating observers in nodejs
const gavin = new EventEmitter();

//can also pass these different parameters like results
gavin.on("gavin is the best", () => {
  console.log("gavin is the best!");
});

gavin.on("gavin is the best", () => {
  console.log("yes he is!");
});

//proceess needs to be watched before the emit occurs, otherwise the process won't be caught
process.on("exit", (code) => {
  console.log(`Process finished with an exit code of ${code}`);
});

gavin.emit("gavin is the best");
