const bonusExercise = () => {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 3000);
  });

  const myOtherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 5000);
  });

  Promise.all([myPromise, myOtherPromise]).then((values) => {
    const sum = values.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    console.log(sum);
  });
};

bonusExercise();
