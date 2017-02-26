var ESVal = require('./index.js')

console.log(ESVal.validate({
}, {
  age: {
   email: true,
   msg: '邮箱格式错误'
  }
})

)
