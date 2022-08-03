export function grow(arr: number[]): number {
  // your code here
  return arr.reduce((acc, cur) => {
    return acc * cur;
  });
}

console.log(grow([1, 2, 3]));
