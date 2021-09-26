/** 得到由re来的检测函数 */

const get_re_func = require('../util/get_re_func')
//分别用来匹配四种参数形式

const invoke_test = get_re_func(/([a-z|A-Z|_|\$][\w|\$]*)\((.*)\)/)
const str_test = get_re_func(/".*"/)
const int_test = get_re_func(/\d+/g)
const func_test = get_re_func(/\(.*\)\{.*\}/)
const null_test = get_re_func(/null/)
const var_test = get_re_func(/[a-z|A-Z|_|\$][\w|\$]*/)





/** 推断这个值的type */
const get_type = str  => { 
    /** 查询链 */
    const chain = [
        [invoke_test, "invoke"],
        [str_test, "str"],
        [int_test, "int"],
        [func_test, "func"],
        [null_test, "null"],
        [var_test, "var"],
        // 额外的自定义type
        ...require('../../api/type/index').get_sync().type_fmt
    ]


    for(let re of chain) {
        // console.log(re[1], re[0], re[0](str))
        if(re[0](str)) {
            return re[1];
        }
    }
    console.log(str)
    throw Error("unsupport type");
}

module.exports = get_type;