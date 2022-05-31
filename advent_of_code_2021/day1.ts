/* 
This is the report given by the sonar. See how many times the depth measurement has increased
199
200
208
210
200
207
240
269
260
263 */

function depthIncreases(arr: number[]): number {
  let counter = 0;
  let currentDepth = arr[0];
  let previousDepth: number;
  for (let i = 1; i < arr.length; i++) {
    previousDepth = arr[i - 1];
    currentDepth = arr[i];
    if (currentDepth > previousDepth) {
      counter++;
    }
  }
  return counter;
}

const ranges: number[] = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
console.log(depthIncreases(ranges));
