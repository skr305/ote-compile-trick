/** inject the type */
const array = require('../../lib/type/array');
const object = require('../../lib/type/object');
const define_type = require('../../api/type/define_type');

module.export = (() => {
    define_type (...array);
    define_type (...object);
    return 1;
}) ()
