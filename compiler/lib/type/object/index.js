const define_type = require('../../../api/type/define_type');

const name = "object";
const re = /\{(.*)\}/

/** define the array */
const fmt = (str) => {
    const get_re_func = require('../../../translate/util/get_re_func')
   
    return get_re_func(re)(str);
};




/** 编译的方式 */
const trans = (str) => {
    const rel = require('./rel/index');

    const arg_mark_split = require('../../../translate/lib/mark/arg_mark'); 
    const get_kv = require('./util/get_kv');

    const map = {}; 
    arg_mark_split(str).forEach(raw_kv => {
        const [k, v] = get_kv(raw_kv);
        map[k] = v;
    });

    //复用参数编译的那一段
    return {type: "object", val: {map, rel}};
};


module.exports = [fmt, name, trans];


