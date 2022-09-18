const determineLotteryNumbers = () => {
  let lotteryNumbers: number[] = [];
  let powerBallNumbers: number[] = [];

  for (let i = 0; i < 5; i++) {
    const randomLotteryNumber = Math.round(Math.random() * 70);
    lotteryNumbers.push(randomLotteryNumber);
  }
  const randomPowerBallNumber = Math.round(Math.random() * 27);
  powerBallNumbers.push(randomPowerBallNumber);

  console.log(lotteryNumbers, "lottery numbers");
  console.log(powerBallNumbers, "powerball numbers");
};

determineLotteryNumbers();
