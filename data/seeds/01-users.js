
exports.seed = function (knex) {
  return knex('users').insert([
    { username: 'testuser1', password: 'hunter2' },
  ]);
};
