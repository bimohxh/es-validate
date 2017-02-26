var ESVal = require('./index.js')

console.log(ESVal.validate({
}, {
  age: {
   required: true,
   email: true,
   msg: '邮箱格式错误'
  }
})

)
