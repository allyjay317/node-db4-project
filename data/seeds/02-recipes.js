
exports.seed = function (knex) {
  return knex('recipes').insert([
    { name: 'Rice Crispy Treats', userId: 1 },
    { name: 'Orange Chicken', userId: 1 },
    { name: 'General Tsao\'s Chicken', userId: 1 },
  ]);
};
