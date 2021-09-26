/** 得到由re来的检测函数 */

const get_re_func = (re) => {
    return str => str.match(re) != null && str.match(re)[0] == str
} 


module.exports = get_re_func