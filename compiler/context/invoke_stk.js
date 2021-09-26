/** 调用栈模型 */
/** 
 * 1.最外层的栈区在初始化时即已加载完成
 * 内中包括库变量 库函数
 * 2.每层调用栈中都包括变量和函数
 * variable: "a": {val:3, type: int}
 * method: "f": {type: 'func', val:{args: [{name: "a", type: int}, ..], prc: ["give("a", add("a", 3))", ...]}}
 */
const stack = [{var: {}}]

module.exports.inVar = (arg) => {
    if(!stack[0]["var"][arg.name]) {
        stack[0]["var"][arg.name] = {val: arg.val, type: arg.type}
    } else {
        throw Error("redefine of the variable");
    }
}

// for the specific situation such as the "this" pointer
module.exports.setVar = (name, _var) => {
    stack[0]["var"][name] = _var;
}

module.exports.newCtx = () => {
    stack.unshift({var: {}})
}

module.exports.rmvCtx = () => {
    if(stack.length > 0) {
        stack.shift()
    }
}

module.exports.stack = stack


