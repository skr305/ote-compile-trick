const str_sign = require('./util/mark_sign').str_sign;
const str_re = require('../../re/index').str_re
module.exports = require('./util/get_spe_mark')(str_re, str_sign);