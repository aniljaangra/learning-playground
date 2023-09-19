

// ===================Promise.prototype.finally====================
function delay(timeMS){
  return new Promise((r)=>{
    setTimeout(r,timeMS)
  })
}

// all 3 will execute
delay(500)
  .then(()=>{
    // throw new Error('error')
    console.log('then executed')
  })
  .finally(()=>{
    console.log('finally executed')
  })
  .then(()=>{
    console.log('then executed')
  })

// ===================getOwnPropertyDescriptors====================

const obj = {
  key : 23,
  value : 45
}
/**
 * getOwnPropertyDescriptors
 * {
 *   key: { value: 23, writable: true, enumerable: true, configurable: true },
 *   value: { value: 45, writable: true, enumerable: true, configurable: true }
 * }
 */
console.log(Object.getOwnPropertyDescriptors(obj))

/**
 * getOwnPropertyDescriptor
 *   { value: 45, writable: true, enumerable: true, configurable: true }
 */
console.log(Object.getOwnPropertyDescriptor(obj,'value'))
