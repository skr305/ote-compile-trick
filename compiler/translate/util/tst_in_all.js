/** 用于检测是否是整个段落符合正则表达式的 */

const test = (str, re) => {
    // console.log(str, re);
    // console.log(str.match(re))
    if(str.match(re) && str.match(re)[0].length == str.length) {
        return true
    } 
    return false
};

module.exports = test;