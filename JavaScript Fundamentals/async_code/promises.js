import fetch from "node-fetch";
let myPromise = new Promise((resolve, reject) => {
  resolve("stuff works");
});
myPromise.then((data) => console.log(data));

//dealing with multiple promises and getting them back in a promise.all array
const getPromises = async () => {
  //could use promise.allSettled in the same way, difference is is that Promise.all will fail if one promise is rejected, whereas allSettled waits until all promises are settled.
  let results = await Promise.all([
    (await fetch("https://jsonplaceholder.typicode.com/todos/2")).json(),
    (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json(),
    (await fetch("https://jsonplaceholder.typicode.com/users/1")).json(),
  ]);
  return results;
};
const showResults = async () => {
  let finalResults = await getPromises();
  console.log("final results \n", finalResults);
};
showResults();
