// 
class KeyColor {

    key_color_map = {};

    /**
     * 
     * @param {*} color_list
     * example: {
     *  Gray: ["=", "+", "-"]
     * } 
     */
    constructor(color_list) {
        /** transform the format */
        Object.keys(color_list).forEach(color => {
            color_list[color].forEach(key => {
                this.key_color_map[key] = color;
            });
        });
    }


    get_color(key) {
        return this.key_color_map[key] || "white";
    }


    get_key_list () {
       return Object.keys(this.key_color_map);
    }

};


export default KeyColor;