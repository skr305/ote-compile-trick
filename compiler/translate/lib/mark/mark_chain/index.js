/** 按照特定规则作批量化的标记 再批量化打回 */
const mark_chain = (mark_list, str, split_sign) => {
    let caches = [];
    mark_list.forEach(mark => {
        let marked = mark.shrink(str)
        caches.push(marked.cache);
        str = marked.str;
    });

    let splited = str.split(split_sign);

    // const reverse_mark = mark_list.reverse();

    mark_list.forEach((mark, index) => {
        mark.put_in(splited, caches[index]);
    });

    return splited;
}

module.exports = mark_chain;
