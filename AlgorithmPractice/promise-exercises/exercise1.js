const exercise2 = () => {
  console.log("Program started");

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 3000);
    setTimeout(() => {
      reject();
    }, 2000);
  });
  myPromise
    .then(() => {
      console.log("Program complete");
    })
    .catch(() => {
      console.log("Program failure");
    });
};

exercise2();

//if promise gets fulfilled it goes to .then, otherwise it goes to .catch
