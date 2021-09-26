/** 包含编译所需的正则表达式套件 */

const var_re = /[a-z|A-Z|_|\$][\w|\$]*/
const invoke_re = /([a-z|A-Z|_|\$][\w|\$]*)\((.*)\)/
const func_body_re = /\{.*\}/
const str_re = /\"[^"]*\"/
const arr_re = /\[.*\]/
const object_re = /\{.*\}/

module.exports = {
    var_re,
    invoke_re,
    func_body_re,
    str_re
};