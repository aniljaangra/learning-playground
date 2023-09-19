const findMissingInteger = (arr , k) => {
  let missing = 0;
  let missingNumber = 1;
  let lastMiss = 1;
  let i =0;
  while(missing < k){
    if(arr[i] === missingNumber){
      missingNumber++;
      i++;
    }else{
      missing++;
      lastMiss = missingNumber;
      missingNumber++;
    }
  }
  return lastMiss;
}
//Solution 2
var findKthPositive = function(arr, k) {
  const missingNumbers = [];
  let currentIndex = 0;
  for(let i=1;i < Infinity;i++){
    if(arr[currentIndex] !== i){
      missingNumbers.push(i);
      if(missingNumbers.length === k){
        break;
      }
    }else{
      currentIndex++;
    }
  }
  return missingNumbers[missingNumbers.length-1]
};


var findKthPositive = function(arr, k) {
  let count = 0;
  for (let item of arr) {
    if (item <= k + count) {
      console.log(item , k, count ,k+count)
      count++;
    }
  }

  return k + count;
};
console.log(findKthPositive([1,2,3,4], 9))
