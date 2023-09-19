/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  let maxSum = nums[0];
  for(let i=1;i< nums.length;i++){
    nums[i] = Math.max(0 , nums[i-1]) + nums[i];
    maxSum = Math.max(maxSum , nums[i])
  }
  return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
