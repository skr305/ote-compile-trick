/** 类型表 */
class Type {

    constructor() {
        

        this.type_list = []

        this.type_fmt = this.type_list.map(type => {
            return [type.type_format, type.type_name]
        })
        this.type_trans = (
            () => {
                let res = {};
                this.type_list.forEach(type => {
                    res[type.type_name] = type.type_trans
                }) 
                return res
            }
        ) ();
    }


    add_type (type_format, type_name, type_tran) {
        this.type_list.push({type_format, type_name, type_tran});
        this.type_fmt.push([type_format, type_name]);
        this.type_trans[type_name] = type_tran;
    }

    get_sync() {
        let {type_fmt, type_list, type_trans} = this
        return {type_fmt, type_list, type_trans}
    }
}

module.exports = new Type();