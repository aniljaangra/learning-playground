/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let total = 0;
  for(let i=0; i< s.length;i++){
    const letter = s[i];
    const prev = s[i-1];
    switch(letter){
      case 'I':
        total+= 1;
        break;
      case 'V':
        total+= 5;
        if(prev === 'I')
          total -= 2;
        break;
      case 'X':
        total+= 10;
        if(prev === 'I')
          total -= 2;
        break;
      case 'L':
        total+= 50;
        if(prev === 'X')
          total -= 20;
        break;
      case 'C':
        total+= 100;
        if(prev === 'X')
          total -= 20;
        break;
      case 'D':
        total+= 500;
        if(prev === 'C')
          total -= 200;
        break;
      case 'M':
        total+= 1000;
        if(prev === 'C')
          total -= 200;
        break;

    }
  }
  return total;
};
