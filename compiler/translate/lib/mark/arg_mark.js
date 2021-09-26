const mark = (str) => {
    /** 先进行分隔 */
    const str_mark = require("./str_mark");
    const invoke_mark = require("./invoke_mark");
    const arr_mark = require("./arr_mark");
    const object_mark = require("./object_mark");

    const mark_chain = require("./mark_chain/index")

    //得到具体的元素表
    return mark_chain([invoke_mark, str_mark], str, ",");
}

module.exports = mark;