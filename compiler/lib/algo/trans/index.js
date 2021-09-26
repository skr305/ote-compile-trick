const get_fmt_func = require('../../../api/lib_func/index')

/** @private */
const check_var = (_var) => {
    if(!_var.val) {
        _var = {val: _var}
    }

    return _var
}

/** 进行数值转化 */

const int = get_fmt_func((_var) => {
    _var = check_var(_var);
    
    const tr_int = Number(_var.val)
    if(isNaN(tr_int)) {
        throw Error("type trans fail");
    }
    return {type: "int", val: tr_int};
}, [{type: "any"}])

const str = get_fmt_func((_var) => {
    _var = check_var(_var);

    return {type: "str", val: String(_var)}
}, [{type: "any"}])



const trans_map = {
    str,
    int
};


module.exports.trans_map = trans_map;
module.exports.str = str;
module.exports.int = int;