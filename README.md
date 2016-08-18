## es-validate
This is based on [jquery-validation](https://github.com/jzaefferer/jquery-validation), not for form validatio, but for data validaion (react、vuejs submit data). 

## Install
```bash
npm install es-validate --save
```


## Usage
```bash
let ESVal = require('es-validate')
Validate.validate(data, rule)
```


## Example

```

let result = ESVal.validate({
    name: ''
  }, {
  name: {
    require: true,
    msg: 'name is required'
  }
})

//- will return  {status: false, msg: 'name is required'}


let result = ESVal.validate({
    name: 'es-validate'
  }, {
  name: {
    require: true,
    msg: 'name is required'
  }
})

//- will return  {status: true}

```


## Rule

```
required: "This field is required.",
email: "Please enter a valid email address.",
url: "Please enter a valid URL.",
date: "Please enter a valid date.",
number: "Please enter a valid number.",
digits: "Please enter only digits.",
maxlength: t.validator.format("Please enter no more than {0} characters."),
minlength: t.validator.format("Please enter at least {0} characters."),
rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
range: t.validator.format("Please enter a value between {0} and {1}."),
max: t.validator.format("Please enter a value less than or equal to {0}."),
min: t.validator.format("Please enter a value greater than or equal to {0}.")
```
