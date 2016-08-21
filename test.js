var ESVal = require('./index.js')

console.log(ESVal.validate({
  age: 12
}, {
  age: {
    min: 'F12'
  }
})

)
