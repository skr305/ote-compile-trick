const { push_this, pop_this } = require("../../context/this_stack");
const get_fmt_func = require('../../api/lib_func/index');


/** 进行 rel_invoke */
const invoke_rel = get_fmt_func((_var, rel_func_name, _args) => {
    const rel_func = _var.val.rel[rel_func_name.val];
    if(rel_func) {
        push_this(_var);
        //这里传入的是raw值
        let res = rel_func(..._args.val.arr);

        pop_this();

        return res;
    }

}, [{type: "array"}, {type: "str"}, {type: "array"}], true);

module.exports = {
    invoke_rel
};