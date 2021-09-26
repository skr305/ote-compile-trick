

const carry = require( '../boot/invoke/carry')
const stack = require('../context/invoke_stk').stack

const get_fmt_func = require('../api/lib_func/index')
const base_lib = require('./base/index')
const rel_lib = require('./rel/index')
const algo_lib = require('./algo/index')

/** lib */
/**
 * 
 * @param {*} judge 用于判断的条件变量的值 
 * @param {*} funcs 真值时执行的函数
 */
const __if = (judge, func) => {
    // console.log(func)
    if(judge != 0 && judge.type != "null") {
        carry({type: "func", val:func})
    }
    return {type: "null", val: "null"};
}

const __if_args = [{name: "judge", type: "any"}, {name: "func", type:"func"}]




const __defineVar = (name, type, init_val = 0) => {
    const type_cck = require("./util/type_cck/index");
    // console.log(name)
    if(stack[0]["var"][name]) {
        // console.log(name)
        throw Error(`repeat define of the variable ${name}`)
    } else {
        // console.log(type,type_lst[type], init_val, type_lst[type](init_val))
        if(type_cck(type, init_val)) {
            stack[0]["var"][name] = {val: init_val, type}
        } else {
            throw Error("wrong initial value")
        }
        // console.log("finish", stack[0]["var"]["a"])
    }

    return {type, val: init_val}
}

const __defineVar_args = [{type: "str"}, {type: "str"}, {type: "any"}]

/** 打印日志 */
const __log = (str) => {
    // console.log("in")
    console.log(str);

    return {type: "null", val: "null"}
}





const __log_args = [{type: "any"}]

const __lib = {
    "var": {
        "if": get_fmt_func(__if, __if_args),
        "defineVar": get_fmt_func(__defineVar, __defineVar_args),
        "log": get_fmt_func(__log, __log_args),
        ...base_lib,
        ...algo_lib,
        ...rel_lib
    },
}


module.exports = __lib