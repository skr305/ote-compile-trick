const get_args = require('../arg/index')
const var_cpl = require('./var')

/** 编译return字句 */
const cpl = (args) => {
    /** 获取参数表 */
    const input_args = get_args(args);
    /** 空参 */
    if(input_args.length == 0) {
        /** 返回空值 */
        return {is_return: true, re_val: var_cpl["null"]()};
    }

    return {is_return: true, re_val: input_args[0]};
}

module.exports = cpl