const findMedianSortedArrays = (nums1, nums2) => {
  // Regular method
  //     let compare = (i, j) => {
  //         return i - j;
  //     }
  //     let arr = nums1.concat(nums2).sort(compare);
  //     if(arr.length % 2 == 0) {
  //         return (arr[arr.length/2 - 1] + arr[arr.length / 2]) / 2;
  //     }
  //     return arr[Math.floor(arr.length/2)];

  let arr = [];
  let totalLen = nums1.length + nums2.length;

  if (totalLen == 1) {
    return nums1.length == 1 ? nums1[0] : nums2[0];
  }

  let arr_len = totalLen % 2 == 0 ? totalLen / 2 + 1 : Math.ceil(totalLen / 2);

  let i = 0;
  let j = 0;

  while (arr.length < arr_len) {
    if (i < nums1.length && j < nums2.length) {
      if (nums1[i] <= nums2[j]) {
        arr.push(nums1[i]);
        i++;
      } else {
        arr.push(nums2[j]);
        j++;
      }
    } else if (i >= nums1.length) {
      arr.push(nums2[j]);
      j++;
    } else {
      arr.push(nums1[i]);
      i++;
    }
  }

  return totalLen % 2 == 0
    ? (arr[arr.length - 1] + arr[arr.length - 2]) / 2
    : arr[arr.length - 1];
};
