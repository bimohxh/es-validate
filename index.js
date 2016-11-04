var _ = require('underscore')


var rule = {
  required: function(val) {
    if(_.isString(val) && val.trim() == '') return false
    return _.isNumber(val) || !_.isEmpty(val) 
  },
  email: function(val) {
    return  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(val)
  },
  url: function(val) {
    return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(val)
  },
  date: function(val) {
    return !/Invalid|NaN/.test("" + new Date(val))
  },
  dateISO: function(val) {
    return  /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(val)
  },
  number: function(val) {
    return  /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(val)
  },
  digits: function(val) {
    return  /^\d+$/.test(val)
  },
  minlength: function(val, ruleVal) {
    return (val || '').trim().length >= ruleVal
  },
  maxlength: function(val, ruleVal) {
    return (val || '').trim().length <= ruleVal
  },
  rangelength: function(val, ruleVal) {
    return (val || '').trim().length >= ruleVal[0] && val.trim().length <= ruleVal[1]
  },
  min: function(val, ruleVal) {
      return val >= ruleVal
  },
  max: function(val, ruleVal) {
      return val <= ruleVal
  },
  range: function(val, ruleVal) {
    return val >= ruleVal[0] && val <= ruleVal[1]
  },
  match: function(val, ruleVal) {
    return  ruleVal.test(val)
  },
  equalTo: function(val, ruleVal) {
    return  val == ruleVal
  },
  notEqualTo: function(val, ruleVal) {
    return  val != ruleVal
  }
}


function validate_single(_data, _rule){
  _data = _data || {}
  for(var key in _rule){
    
    var current_rule = _rule[key] // {min: 12, msg: 'NO'}
    var msg = current_rule['msg'] || '有字段未通过验证'
    
    for(var r in current_rule){
      console.log('==', r)
      if(rule[r]) {
        var rule_name = rule[r]
        var rule_val = current_rule[r]
        if(!rule_name(_data[key], rule_val)){ 
          return {
            status: false,
            msg: msg
          }
        }  
      }
    }
  }
  return  {
    status:  true
  }
}

function validate(_data, _rule){
  if (!Array.isArray(_data)) {
    _data = [_data]
  }

  var result = {
    status: true
  }

  _data.forEach(function(item) {
    var current = validate_single(item, _rule)
    if(!current.status){
      result =  current
      return
    }
  })

  return result
}


module.exports = {
  validate: validate
}
