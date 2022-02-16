function intersection(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  
  let i_1 = 0;
  let i_2 = 0;
  const result = [];

  while(i_1 < nums1.length && i_2 < nums2.length) {
    if(nums1[i_1] === nums2[i_2]) {
      result.push(nums1[i_1]);
      i_1 += 1;
      i_2 += 1;
    } else if(nums1[i_1] > nums2[i_2]) {
      i_2 += 1;
    } else {
      i_1 += 1;
    }
  }
  return result;
}

export default intersection;
