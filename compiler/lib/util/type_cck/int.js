module.exports = (cck_obj) => {
    return isNaN(Number(cck_obj)) ? false : true;
}