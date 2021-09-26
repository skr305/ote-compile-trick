const get_type_cpl= require('./var')
const get_type = require('./get_type')



/** 编译单个符合条件的arg */
const cpl = _arg  => { 
    _arg = String(_arg)
    return (get_type_cpl())[(get_type(_arg))] (_arg) /** 查询链 */
}


module.exports = cpl;