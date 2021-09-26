const str_mark = require('../str_mark');
const invoke_mark = require('../invoke_mark');
const func_mark = require('../func_mark');

/** 将传入函数执行在字符串已经过必要修饰的前提下 */
const mark_slot = (mark, str, split_sign) => {
    let {marked_str, cache} = mark.shrink(str);
    let raw_sp = marked_str.split(split_sign)
    return mark.put_in(raw_sp, cache);
}



const invoke_slot = (str, split_sign) => mark_slot(invoke_mark, str, split_sign);

const func_slot = (str, split_sign) => mark_slot(func_mark, str, split_sign);

const str_slot = (str, split_sign) => mark_slot(str_mark, str, split_sign);


module.exports = {
    invoke_slot,
    func_slot,
    str_slot
}