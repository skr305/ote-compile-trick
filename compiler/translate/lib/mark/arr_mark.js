const arr_sign = require('./util/mark_sign').arr_sign;
const arr_re = require('../../re/index').arr_re
module.exports = require('./util/get_spe_mark')(arr_re, arr_sign);