const get_split_in_func = require("../lib/func_spl");
const test = require("../util/tst_in_all");

/** 编译function的参数列表 */
const cpl = (str) => {

    //参数表
    const lst = []

    get_split_in_func(str, ",").forEach(v => {
        //避免空转
        if(v.length == 0) {
            return
        }
        let ele = get_split_in_func(str, ":");
        if(ele.length != 2) {
            // console.log(ele)
            throw Error("bad input args")
            // return
        }
        if(test(ele[0], /[a-z|A-Z|_|\$][\w|\$]*/)) {
            lst.push({type: ele[1], name: ele[0]})
        }
    })

    // console.log(lst)
    return lst;

}


module.exports = cpl;