var ESVal = require('./index.js')

console.log(ESVal.validate({
  age: 1
}, {
  age: {
    required: true
  }
})

)
