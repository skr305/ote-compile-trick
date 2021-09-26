const get_fmt_func = require("../../../api/lib_func/index")

/** 加运算 */
const add = get_fmt_func((a, b) => {
    // console.log(a + b)
    return a + b;
}, [
    {type: "str|int"},
    {type: "str|int"}
])


const devide_func = (a, b) => {
    return  {type: "int", val: a / b};
}

const muti_func = (a, b) => {
    return a * b;
}

const minus_func = (a, b) => {
    return a - b;
}


const remain_func = (a, b) => {
    return a % b;
}

const int_algo_type = [
    {type: "int"},
    {type: "int"}
]

const devide = get_fmt_func(devide_func, int_algo_type);
const muti = get_fmt_func(muti_func, int_algo_type);
const remain = get_fmt_func(remain_func, int_algo_type);
const minus = get_fmt_func(minus_func, int_algo_type);


const algo_set = {
    add,
    remain,
    minus,
    devide,
    muti
}

module.exports = algo_set