const carry = require('./carry');
const func_cpl = require('../../translate/invoke')

/** 编译并执行单条语句-carry raw string */
const invoke = (str) => {
    const res =  carry(func_cpl(str));
    return res
}

module.exports = invoke;