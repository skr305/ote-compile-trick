const { _null } = require('../../null');

// 
const get = (key) => {
    const get_cur_this = require('../../../../context/this_stack').get_cur_this;
    let _this = get_cur_this();

    if(_this.type != "object") {
        throw Error("invoke object::get with data which isn't a object");
    }

    return _this.val.map[key.val] || _null
}


const set = (key, val) => {
    const get_cur_this = require('../../../../context/this_stack').get_cur_this;
    let _this = get_cur_this();

    if(_this.type != "object") {
        throw Error("invoke object::set with data which isn't a object");
    }

    
    _this.val.map[key.val] = val
}


module.exports = {
    get
};