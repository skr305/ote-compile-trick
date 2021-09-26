const object_sign = require('./util/mark_sign').object_sign;
const object_re = require('../../re/index').object_re
module.exports = require('./util/get_spe_mark')(object_re, object_sign);