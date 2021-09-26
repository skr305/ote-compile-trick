const { _null } = require('../../null');

//
const get = (index) => {
    const get_cur_this = require('../../../../context/this_stack').get_cur_this;
    let _this = get_cur_this();

    if(_this.type != "array") {
        throw Error("invoke get with data which isn't a array");
    }

    return _this.val.arr[index.val] || _null
}


module.exports = {
    get
};