const sugar_cpl = require('../api/sugar/index')

//用来标记字符串和函数的语句
const func_sign = require('../translate/lib/mark/util/mark_sign').func_sign
const str_sign = require('../translate/lib/mark/util/mark_sign').str_sign

const trim = (str) => {
    //采用标记法保留字符串中的空
    let str_cache = []
    // 这方面需要禁止贪心
    str = str.replace(/\"[^"]*\"/g, (v) => {
        // console.log(v)
        str_cache.push(v);
        return str_sign;
    })

    // console.log(str, str_cache)
    str = str.replace(/\s/g, "")
    const str_sign_re = new RegExp(str_sign, "g");
    str = str.replace(str_sign_re, (v, ...arg) => {
        let temp = str_cache.shift()
        return temp
    })
    return str
}

/**
 * 
 * @param {*} str
 * @returns 分隔编译后的语句段落 
 */
const get_split = (str) => {
    let re = new RegExp(/\{.*?\}/g)
    //make mark
    let cache = []
    str = str.replace(re, (v) => {
        cache.push(v)
        return func_sign
    })

    // console.log(str)


    let seq = str.split(";")

    // console.log(seq);
    //recover the function body
    let c_tag = 0

    const m_re = new RegExp(func_sign, "g")

    for(let i=0; i<seq.length; i++) {
        if(c_tag < cache.length) {
            seq[i] = seq[i].replace(m_re,(v) => {
                if(c_tag >= cache.length) {
                    throw Error("wrong input")
                }
                return cache[c_tag++];
            }) 
        }
    }
    return seq
}



/** 分隔编译 */
const compile = (str) => {
    // console.log(str);
    str = sugar_cpl(trim(str));
    return get_split(str);
}





module.exports = compile