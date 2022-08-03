/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let ans = new Array(nums.length);
  ans[0] = nums[0];
  for (let i = 1; i < nums.length; i++) ans[i] = ans[i - 1] + nums[i];
  console.log(ans);
  return ans;
};

runningSum([1, 1, 1, 1, 1]);
