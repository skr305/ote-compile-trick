const get_split_in_func = require("../lib/func_spl");
const arg_cpl = require("../lib/arg_cpl");

/** 参数编译 */
const compile = (str) => {
    let res = [];

    /** 先进行分隔 */
    const arg_mark_split = require('../../translate/lib/mark/arg_mark')
    const arg_lst = arg_mark_split(str);

    //remove the black argument
    if(arg_lst.length >= 1) {
        if(arg_lst[arg_lst.length-1] == "") {
            arg_lst.pop();
        }
    }

    arg_lst.forEach(_arg  => {
        res.push(arg_cpl(_arg));
    })
    return res
}

module.exports = compile