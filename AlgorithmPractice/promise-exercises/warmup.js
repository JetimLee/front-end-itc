const warmup = () => {
  console.log("Program started");

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });
  console.log("Program in progress");
  console.log(myPromise);
  myPromise.then(() => {
    console.log("Program finished");
  });
};

warmup();
