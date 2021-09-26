/** 得到在函数保持完整性的前提下的分隔语句 */
const shrink = require("./mark/func_mark").shrink;
const put_in = require("./mark/func_mark").put_in;


/** 在保持函数整体性的前提下得到关于某分隔符的分隔数组 */
const get_split_in_func = (str, sp_code) => {
    let res = shrink(str);
    str = res.str;
    let cache = res.cache;

    let arr = str.split(sp_code);
    put_in(arr, cache);

    return arr;
}


module.exports = get_split_in_func