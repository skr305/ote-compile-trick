const invoke = require('./invoke/index');

/* compile the input str and carry it */
const engine = (exps) => {
    // console.log(exps)
    let re_val = null
    // console.log(exps)
    exps.forEach(exp => {
        /** compile the function */
        /** first make sure it's like func() */
        if(!exp || !exp.length || exp.length == 0) {
            return;
        }
        let res = invoke(exp);
        if(res.is_return) {
            re_val = res.return_val;
            return;
        }
    });

    return re_val;
}

module.exports = engine
