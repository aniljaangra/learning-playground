const flattenArray = (arr) => {
  return arr.reduce((acc, curr)=> {
    if(Array.isArray(curr)){
      acc = [...acc, ...flattenArray(curr)]
    }else{
      acc.push(curr)
    }
    return acc;
  },[]);
}

console.log(flattenArray([[1,2,3],[3,[4],[5,7,[8,9,10]]]]))
