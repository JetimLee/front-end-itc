//write a function that wraps setTimeout with a promise, the function gets a time parameter for the setTimeout function and resolves the string "success"
//write an async function that calls the function from section 1 and prints the resolved value

let resolvePromise = (time) => {
  let myString = "success";
  let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(myString);
    }, time);
  });
  return myPromise;
};

let myAsyncFunc = async () => {
  let myPromise = await resolvePromise(1000);
  console.log(myPromise);
};
myAsyncFunc();
