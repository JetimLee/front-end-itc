//indempotence - a function that returns what we expect it to

//this is a function of a non indempotent function
function notGood() {
  console.log(Math.random());
  return Math.random();
}
notGood();

//good example of indempotence
Math.abs(Math.abs(-50));
