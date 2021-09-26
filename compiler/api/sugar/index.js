
const base = require('./base')

/** 语法糖编译插槽 */
let sugar_arr = [];

sugar_arr = sugar_arr.concat(base);



/** 按语法糖进行转化 */
const compile_sugar = (str) => {
    sugar_arr.forEach((sugar) => {
        str = sugar(str);
    })

    return str;
};


module.exports = compile_sugar;
// module.exports = base;

