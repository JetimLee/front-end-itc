function removeElement(nums: number[], val: number): number[] {
  return nums.filter((num: number) => {
    if (num !== val) {
      return num;
    }
  });
}

/* [3,2,2,3]
3
*/

console.log(removeElement([3, 2, 2, 3], 3));
