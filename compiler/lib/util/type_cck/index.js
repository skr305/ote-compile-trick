/** 检查是否符合某个类型 */

const type_cck = (type, val) => {
    const func_cck = require('./func');
    const int_cck = require('./int');

    //可用的type
    const type_lst = {
        "str": () => { return val ? true : false},
        "func": func_cck,
        "int": int_cck
    };

    //不存在此类型的时候默认为真
    if(!type_lst[type] || type_lst[type](val)) {
        return true
    }

    return false
}

module.exports = type_cck