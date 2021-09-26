const test = require('./util/tst_in_all')
const get_args = require('./arg/index')
const find_def = require('../context/find_define')
const cpl_by_return = require("./lib/return_cpl");



/** 调用编译 最终返回 函数实体+参数表(带初始化值) */
const compile = str => {

    const re = /([a-z|A-Z|_|\$][\w|\$]*)\((.*)\)/
    let func_info = {val: {}, args: [], is_lib_func: false}
    //符合条件
    if(test(str, re)) {

        const res = str.match(/([a-z|A-Z|_|\$][\w|\$]*)\((.*)\)/)

        /** 特殊的调用 return */
        if(res[1] == "return") {
            /** 返回特殊形式的编译结果 */
            return cpl_by_return(res[2])
        }


        //寻找函数定义然后注入
        const def = find_def(res[1])
        if(def != -1) {
            //lib function
            if(def.type == "func") {
                func_info.val = def.val
                if(typeof def.val.seq == "function") {
                    //是库函数
                    func_info.is_lib_func = true;
                }
            } else {
                throw Error("compile fail");
            }
        } else {
            throw Error("compile fail")
        }

       

        //得到输入参数表
        const input_args = get_args(res[2]);
        // 结果args {type:, val:, name:,}
        let args = []

        //比对并进行参数重构
        if(input_args.length >= def.val.args.length) {
            def.val.args.forEach((val,index) => {
                let arg_ava = false
                const ava_types = val.type.split("|");
                for(let type of ava_types) {
                    if(type == input_args[index].type || type == "any") {
                        arg_ava = true;
                        break;
                    }
                }

                if(arg_ava) {
                    args.push({val: input_args[index].val, type:input_args[index].type, name: val.name})
                } else {
                    // console.log(val.type, input_args[index])
                    console.error("bad input args, unmatch")
                    throw Error("compile fail"); 
                }
            });

            func_info["args"] = args;
        } else {
            
            throw Error("compile fail");
        }
        return func_info
    }
    // console.log(str.length, str)
    throw Error("compile fail");
}

module.exports = compile