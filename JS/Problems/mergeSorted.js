
const mergeSortedArray = (nums1, nums2) => {
  let [i, j] = [0, 0];
  let newArr = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      newArr.push(nums1[i]);
      i++;
    } else {
      newArr.push(nums2[j]);
      j++;
    }
  }

  // Append remaining elements from nums1 or nums2, if any
  newArr = newArr.concat(nums1.slice(i)).concat(nums2.slice(j));

  return newArr;
};


console.log(mergeSortedArray([1,2,3],[4,5,6]))

const mergeSortedArrayWithoutExtraSpace = (nums1 , nums2) => {
  let idx1 = nums1.length - nums2.length -1; //2
  let idx2 = nums2.length-1; // 2
  let mergeIndex = idx1+idx2+1;
  console.log(mergeIndex,idx1,idx2,nums1,nums2)
  while (idx2 >= 0){
    if(idx1 >= 0 && nums2[idx2] <= nums1[idx1]){
      nums1[mergeIndex] = nums1[idx1];
      idx1--;
    }else{
      nums1[mergeIndex] = nums2[idx2];
      idx2--;
    }
    mergeIndex--;
    console.log(mergeIndex,idx1,idx2,nums1)
  }
  return nums1
}

console.log(mergeSortedArrayWithoutExtraSpace([4,5,6,0,0,0],[1,2,3]))
