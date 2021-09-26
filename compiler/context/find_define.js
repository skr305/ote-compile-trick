const stack = require ("./invoke_stk").stack
const lib = require( '../lib/lib')

module.exports = (var_name) => {
    context = {}
    for(let i=0; i<=stack.length-1; i++) {
        context = stack[i];
        if(context["var"][var_name]) {
            return context["var"][var_name]
        } 
    }
    if(lib["var"][var_name]) {
        return lib["var"][var_name]
    }
    return -1
}