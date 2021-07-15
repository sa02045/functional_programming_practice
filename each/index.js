// list를 돌면서 iter에게 반복행위를 완전히 위임!!!
function _each(list, iter) {
    for (let i = 0; i < list.length; i++){
        iter(list[i]);
    }
    return list;
}

module.exports = _each;

