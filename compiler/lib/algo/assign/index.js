const get_fmt_func = require('../../../api/lib_func/index');
const type_cck = require('../../util/type_cck');

/** 赋值 */
const assign = get_fmt_func( (name, val) => {


    const find_def = require('../../../context/find_define')
    const wrt_def = require('../../../context/write_define')

    
    let _var = find_def(name.val);
    
    if(_var == -1) {
        throw Error(`var name:${name.val} doesn't exist`);
    }

    if(_var.type == val.type) {
        wrt_def(name.val, val)
        return val;
    }

    throw Error("type error while assign");
    
}, [{type: "any"}, {type: "any"}], true)

module.exports = {
    assign,
};
