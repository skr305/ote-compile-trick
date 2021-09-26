const func_sign = require('./util/mark_sign').func_sign;
const func_re = require('../../re/index').func_re
module.exports = require('./util/get_spe_mark')(func_re, func_sign);
