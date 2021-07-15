const _each = require('../each/index.js');

function _filter(users, predi) {
    let new_list = [];
    _each(new_list, (user) => {
      if (predi(user)) {
        new_list.push(user);
      }
    });
  return new_list;
}

module.exports = _filter