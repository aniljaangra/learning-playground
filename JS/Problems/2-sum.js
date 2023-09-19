/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const missingMap = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (missingMap.hasOwnProperty(complement.toString())) {
      return [missingMap[complement], i];
    }

    missingMap[nums[i]] = i;
  }

  return [];
};

console.log(twoSum([2,7,11,15],9))

// without extra space

const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return []; // Return an empty array if no such pair exists
};
