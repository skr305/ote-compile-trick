/** 基本的语法糖 */
// if语法糖
// defineVar语法糖
// 赋值语法糖

const if_sugar = (str) => {
    /** 对所有符合 if() {} 的语句进行编译 */
    const re = /if\((.*)\)\{(.*)\};/g;
    // console.log(str)
    str = str.replace(re, val => {
        const mat = val.match(/if\((.*)\)\{(.*)\};/);
        return `if(${mat[1]},(){${mat[2]}});`
    });
    
    return str
    
}

const defineVar_sugar = (str) => {
    /** 对定义语句进行预处理 */
    // console.log(str);
    const re = /([^;^\s]+):([^;\s]+)=([^;^\s]+)/g;
    str = str.replace(re, val => {
        // console.log(val);
        //这个地方不能用全局模式
        const mat = val.match(/([^;^\s]+):([^;^\s]+)=([^;^\s]+)/);
        // console.log(mat)
        return `defineVar("${mat[1]}","${mat[2]}",${mat[3]});`
    });
    
    return str
}

const assign_sugar = (str) => {
    const re = /([^;^\s]+)=([^;^\s]+)/g;
    str = str.replace(re, val => {
        //这个地方不能用全局模式
        const mat = val.match(/([^;^\s]+)=([^;^\s]+)/);
        // console.log(mat)
        return `defineVar("${mat[1]}","${mat[2]}");`
    });
    
    return str
}



const sugar_arr = [
    if_sugar,
    defineVar_sugar
]


module.exports = sugar_arr;
