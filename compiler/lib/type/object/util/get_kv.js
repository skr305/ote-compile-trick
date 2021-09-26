

/** 编译键值对 */
const get_kv = (str) => {
    const arg_cpl = require("../../../../translate/lib/arg_cpl");
    const [key, value] = str.split(":");
    
    return [String(key), arg_cpl(value)]
}


module.exports = get_kv;