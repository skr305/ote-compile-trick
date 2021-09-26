const get_fmt_func = (func, args, ned_raw = false) => {
    return {val: {seq:func, args, ned_raw} , type: "func"};
}

module.exports = get_fmt_func;