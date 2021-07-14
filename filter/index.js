function _filter(users, predi) {
    let new_list = [];
    for (let i = 0; i < users.length; i++){
        if (predi(users[i])) {
            new_list.push(users[i]);
        }
    }
    return new_list;
}

module.exports = _filter;