const {rmvCtx, newCtx, inVar} = require( '../../context/invoke_stk');
const { _null } = require('../../lib/type/null');
const func = require('../../lib/util/type_cck/func');

const engine = require('../engine')


const newCtx_init = (args) => {
    newCtx();
    args.forEach(arg => {
        inVar(arg);
    })
}

// lib and define 

/** 函数执行器 */
// 1.
const carry = (func_info) => {

    /** 返回针对engine的特殊值 */
    if(func_info.is_return) {
        // console.log("in", func_info.re_val)
        return {is_return: true, return_val: func_info.re_val}
    }

    if(func_info.is_lib_func) {
        
        /** 需要raw调用时 */
        if(func_info.val.ned_raw) {
            return func_info.val.seq(...func_info.args) || _null;
        }

        /** 需要普通传值调用时 */
        const args = []
        func_info.args.forEach(arg => {
            args.push(arg.val);
        })

        // console.log(args)
        return func_info.val.seq(...args);

    }
    const args = func_info.val.args
    /** build ctx */
    newCtx_init(args)
    /********未补全 */
    const res = require('../engine')(func_info.val.seq);
    
    rmvCtx()
    return res ? res : require("../../lib/type/null")._null;
}


module.exports = carry
