export function getAverage(marks: number[]): number {
  //TODO : calculate the downwar rounded average of the marks array
  return Math.floor(
    marks.reduce((acc, cur) => {
      return acc + cur;
    }, 0) / marks.length
  );
}

console.log(getAverage([1, 2, 3, 4]));
