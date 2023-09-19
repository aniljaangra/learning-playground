
const list = [ 1,2,3,4,5,6]

for(let i of list){
  // prints items of array
  console.log(i)
}

for(let i in list){
  // prints index of array
  console.log(i)
}

const obj = { a : 1 , b : 2}
for(let i in obj){
  // prints key of object
  console.log(i)
}

for(let i of obj){
  // prints key of object
  console.log(i)
}
