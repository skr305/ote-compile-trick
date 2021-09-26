
/** 访问并写入 */
module.exports = (name, new_val) => {
    const stack = require ("./invoke_stk").stack
    if(!new_val.type || !new_val.val) {
        throw Error("input the var_val with bad format")
    }
    
    context = {}
    for (let i=0; i<=stack.length-1; i++) {
        context = stack[i];
        if(context["var"][name]) {
            context["var"][name] = new_val;
            return
        } else {
            throw Error(`assign to undefined variable: ${name}`)
        }
    }

}