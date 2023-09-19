
const reverseString = str => {
  let i= 0;
  let j= str.length -1;
  while (i < j){
    let temp = str[j];
    str[j] = str[i];
    str[i] = temp;
    i++;
    j--;
  }
  return str;
}

console.log(reverseString('ankit'.split('')).join(''))

