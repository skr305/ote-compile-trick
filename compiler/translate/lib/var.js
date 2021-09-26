const test = require("../util/tst_in_all");
const spl_cpl = require('../split');
const arg_cpl = require('../arg/fun_arg');
const find_def = require('../../context/find_define');
const get_type = require("./get_type");

/** 转化字符串 */
const cpl_str = (str) => {
    return {val: str.slice(1, str.length-1), type: "str"};
}

/** 转化函数 */
const cpl_func = (str) => {
    
    //被编译过后的函数
    const compiled_func = {args: [], seq: []}

    //先把函数两部分拆开
    const re = /\((.*)\)\{(.*)\}/
    if(test(str, re)) {
        const result = str.match(re);
        compiled_func["args"] = arg_cpl(result[1]);
        compiled_func["seq"] = spl_cpl(result[2]); 
    }

    return {type: "func", val: compiled_func};

}


const compile_int = (str) => {
    return {type:"int", val:Number(str)};
}

const compile_var = (var_name) => {
    const def = find_def(var_name) 
    // console.log(def)
    if(def != -1) {
        return def;
    }
}

const compile_null = () => {
    return {type: "null", val: "null"}
}

const cpl_invoke = (func) => {
    const res = require('../../boot/invoke/index')(func);
    //已经呈编译状态
    if(res.type && res.val) {
        return res;
    }
    //尚未编译
    return {type: get_type(String(res)), val: res};
}

/** 变量编译 */
const get_compile = () => {
    return {
        "invoke": cpl_invoke,
        "str": cpl_str,
        "int": compile_int,
        "var": compile_var,
        "func": cpl_func,
        "null": compile_null,
        ...require("../../api/type/index").type_trans
    }
}


module.exports = get_compile