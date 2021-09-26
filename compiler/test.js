const run = require("./boot/index")

const code = `
    defineVar("b", "str", 3);
    defineVar(
        "m",
        "func",
        () {
            defineVar("a", "str", 5);
            log(null);
            log(b);
            return(5);
        }
    );
    log(m());
    h:int = 3;
    log(h);
    c:int = 43;
    d:array = [5];

    b:object = {"d": 3, "a": 5};
    
    log(invoke_rel(d, "get", [0]));

    if(c) {
        log(c);
    };



    log(assign("h", c));

    k:int = 0;
    j:int = 1;
    temp:int = 0;
    count:int = 10;
    log(minus(count,1));
    log(assign("count", minus(count, 1)));
    log(count);
`
// while("count", (){
        
//     assign("count", minus(count, 1));
//     assign("temp", j);
//     log(count);
//     log(assign("j",add(k, j)));
// });
run(code);

