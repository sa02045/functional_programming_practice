const _map = require('./map');
const _filter = require('./filter');

let users = [
  { id: 1, name: "ID", age: 36 },
  { id: 2, name: "BJ", age: 32 },
  { id: 3, name: "JM", age: 32 },
  { id: 4, name: "PJ", age: 27 },
  { id: 5, name: "HA", age: 25 },
  { id: 6, name: "JE", age: 26 },
  { id: 7, name: "JI", age: 31 },
  { id: 8, name: "MP", age: 23 },
];

// STEP1. _map , _filter 함수
const age_list = _map(users, (user) => user.age);
console.log(age_list)

const over_thirty_list = _filter(users, (user) => user.age > 30);
console.log(over_thirty_list)

