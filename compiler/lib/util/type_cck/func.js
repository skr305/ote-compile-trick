module.exports = (cck_obj) => {
    /** func_fmt:
     * val: {args: Array, seq: Array}
     */
    if(cck_obj) {
        if(cck_obj["args"] instanceof Array
        && cck_obj["seq"] instanceof Array) {
            return true;
        }
    }

    return false;
}