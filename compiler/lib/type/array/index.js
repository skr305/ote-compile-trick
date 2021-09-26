const define_type = require('../../../api/type/define_type');

const name = "array";
const re = /\[(.*)\]/

/** define the array */
const fmt = (str) => {
    const get_re_func = require('../../../translate/util/get_re_func')
   
    return get_re_func(re)(str);
};

/** 编译的方式 */
const trans = (str) => {
    const arg_cpl = require('../../../translate/arg/index');
    const rel = require('./rel/index');

    //复用参数编译的那一段
    return {type: "array", val: {arr: arg_cpl(str.match(re)[1]), rel}};
};


module.exports = [fmt, name, trans];


