const exercise2 = () => {
  console.log("Program started");

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  console.log(myPromise);
  console.log("Program in progress...");
  myPromise
    .then(() => {
      console.log("Step 1 complete");
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Step 2 complete");
        }, 3000);
      });
    })
    .then((message) => {
      console.log(message);
    });
};

exercise2();
