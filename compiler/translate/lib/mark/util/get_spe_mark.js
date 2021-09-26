// 得到特定分隔公式 
/**
 * 
 * @param {*} target 目标的正则表达式 
 * @param {*} mark_sign 
 */
const get_spe_mark = (target, mark_sign) => {
    const shrink = (str) => {
        let re = new RegExp(target, "g");
        //make mark
        let cache = []
        str = str.replace(re, (v) => {
            cache.push(v)
            return mark_sign;
        })
        return {str, cache};
    }
    
    
    /** 嵌入函数体 */
    const put_in = (seq, cache) => {
        //对于数组作恢复操作
        let c_tag = 0
        const str_re = new RegExp(mark_sign, "g");
        
        for(let i=0; i<seq.length; i++) {
            if(str_re.test(seq[i])) {
                if(c_tag < cache.length) {
                    seq[i] = seq[i].replace(str_re, cache[c_tag++]) 
                } else {
                    throw Error("wrong input")
                }
            }
        }
    }

    return {shrink, put_in};
}

module.exports = get_spe_mark;