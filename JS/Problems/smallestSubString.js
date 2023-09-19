/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow =function smallestSubString(original , sub){
  if(original.length < sub.length){
    return ""
  }
  const charCount = new Map();
  let target = sub.length;
  for(const char of sub){
    charCount.set(char , charCount.get(char)+1 || 1)
  }
  let left = 0;
  let minLength = Infinity;
  let indexL = 0;
  for(let right=0;right <= original.length; right++){
    if(charCount.has(original[right])){
      if(charCount.get(original[right]) > 0){
        target--;
      }
      charCount.set(original[right] , charCount.get(original[right])-1)
    }
    while(target === 0){
      if(right - left < minLength){
        minLength = right - left;
        indexL = left;
      }
      if(charCount.get(original[left]) >= 0){
        target++;
      }
      charCount.set(original[left],charCount.get(original[left])+1)
      left++;
    }
  }
  if(minLength === Infinity) return ""
  return original.slice(indexL, indexL+minLength+1)
}



console.log(minWindow('this is a test string','tist'))
//  console.log(minWindow('a','b'))
