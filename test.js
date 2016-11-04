var ESVal = require('./index.js')

console.log(ESVal.validate({
  
}, {
  age: {
   notEqualTo: 12,
   required: true
  }
})

)
