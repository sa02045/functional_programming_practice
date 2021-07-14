function _map(users, mapper) {
    let new_list = [];
    for (let i = 0; i < users.length; i++){
        new_list.push(mapper(users[i]));
    }
    return new_list;
}

module.exports = _map;