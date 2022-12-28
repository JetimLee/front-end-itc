function countDown(num) {
  console.log(num);
  let nextNumber = num - 1;
  if (nextNumber >= 0) {
    countDown(nextNumber);
  }
}

countDown(3);
