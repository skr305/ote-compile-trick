

/** 定义类型的api */
/**
 * 
 * @param {*} type_name 
 * @param {*} type_format  the validate of the type
 * @param {*} type_trans how type translate to the format  
 */
const def_type = (type_format, type_name, type_trans) => {
    const type = require('./index');
    type.add_type(type_format, type_name, type_trans);

    return type_name;
}

module.exports = def_type;