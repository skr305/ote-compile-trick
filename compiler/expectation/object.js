/** how to use the object in the otter */
const code = `
use("../MID"); //use the context

// import the node sql modules
sql_modules:obj = useJS('../JS/sql.js'); // the JS modules must have some specific interface
sql_modules.init();

http_modules:obj= useJS('../JS/http.js');
http_modules.init();

http_modules.onPort(3030);

mid_wre:MID = getMID();

//the log list
log_lst:array = [system];
log_lst.in(getMIDLog());

log(log_lst[0]);
`