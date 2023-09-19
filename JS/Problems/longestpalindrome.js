const reverse = s => s.split('').reverse().join('');
const palindrome = s => reverse(s) === s

// O(n2)
var longestPalindrome = function(s) {
  if(reverse(s) === s){
    return s;
  }
  let longest = s[0];
  for(let i=s.length-1;i >0 ;i--){
    for(let j=0;j<i;j++){
      const subs = s.substring(j,i+1);
      if(palindrome(subs) ){
        if(longest.length < subs.length){
          longest = subs;
        }
      }
    }
  }
  return longest;
};

console.log(longestPalindrome('sbbbbb'))
