var firstMissingPositive = function (nums) {
  const set = new Set(nums);
  let i = 1;

  while (set.has(i)) {
    i++;
  }

  return i;
};
