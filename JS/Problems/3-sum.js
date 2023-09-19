/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  const target = 0;
  const tripletsSet = new Set();
  nums.sort((a,b) => a-b);

  for(let i=0;i<nums.length;i++){
    let j = i+1;
    let k = nums.length -1;
    if( nums[i] > target || nums[i] + nums[j] > target){
      console.log(i,j,k,nums)
      break;
    }
    while(j<k){
      const total = nums[i] + nums[j] + nums[k];
      if(total === target){
        tripletsSet.add(`${nums[i]},${nums[j]},${nums[k]}`)
        j++;
      }else if(total < target){
        j++;
      }else{
        k--;
      }
    }
  }
  return [...tripletsSet].map(triplet => triplet.split(','));
};

console.log(threeSum([3,0,-2,-1,1,2]))
