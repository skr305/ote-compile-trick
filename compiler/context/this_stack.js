const { _null } = require("../lib/type/null");

/** the stack of this point */
// first element is the null
const stack = [_null]

module.exports.get_cur_this = () => stack[0];
module.exports.push_this = (_this) => stack.unshift(_this);
module.exports.pop_this = () => stack.shift();
