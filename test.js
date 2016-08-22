var ESVal = require('./index.js')

console.log(ESVal.validate({
  age: {}
}, {
  age: {
    required: true
  }
})

)
