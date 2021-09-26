const invoke_sign = require('./util/mark_sign').invoke_sign;
const invoke_re = require('../../re/index').invoke_re
module.exports = require('./util/get_spe_mark')(invoke_re, invoke_sign);