module.exports = () => {
    const define_type = require('../../api/type/define_type')
    define_type(
        "object",
        /(".*":.*,)*[|]/,
        
    )
}