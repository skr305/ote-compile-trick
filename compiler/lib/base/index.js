const get_fmt_func = require('../../api/lib_func/index')

/** 得到包装后的函数 */
const get_wrp_func = (func) => {
    return {type: "func", val: func};
}
 
/** 基础库 */

const __while = (condition, body) => {
    // console.log(condition)
    const arg_cpl = require('../../translate/lib/arg_cpl')
    let fmt_arg = arg_cpl(condition);
    const wrp_func = get_wrp_func(body);

    while(fmt_arg && fmt_arg.val !=0 && fmt_arg.type != "null") {
        require('../../boot/invoke/carry')(wrp_func);
        fmt_arg = arg_cpl(condition);
    }
}


const __while_args = [
    {type: "any"},
    {type: "func"}
];


const base_lib = {
    "while": get_fmt_func(__while, __while_args),
}

module.exports = base_lib