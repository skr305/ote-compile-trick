const engine = require( './engine')
const split_cpl = require( '../translate/split')
const inject = require('./runtime/index')

const __run = (str) => {
    inject();
    engine(split_cpl(str));
}


module.exports = __run
