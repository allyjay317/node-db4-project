const { SSL_OP_NO_TLSv1 } = require("constants");

exports.up = function (knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments('id')
    tbl.text('username')
      .notNullable()
      .unique()
    tbl.text('password')
      .notNullable()
  })
    .createTable('recipes', tbl => {
      tbl.increments('id')
      tbl.text('name')
        .notNullable()
      tbl.text('userId')
        .unsigned()
        .notNullable()
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('steps', tbl => {
      tbl.increments('id')
      tbl.integer('stepNumber')
        .unsigned()
        .notNullable()
      tbl.text('instructions')
        .notNullable()
      tbl.integer('recipeId')
        .notNullable()
        .unsigned()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })
    .createTable('ingredients', tbl => {
      tbl.increments('id')
      tbl.text('name')
        .notNullable()
        .unique()
    })
    .createTable('measurements', tbl => {
      tbl.increments()
      tbl.text('name')
        .notNullable()
        .unique()
      tbl.text('plural')
        .unique()
      tbl.text('abreviation')
        .unique()
    })
    .createTable('recipe_ingredients_measurements', tbl => {
      tbl.increments()
      tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('recipes.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('ingredient_id')
        .notNullable()
        .unsigned()
        .references('ingredients.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.integer('measurement_id')
        .notNullable()
        .unsigned()
        .references('measurements.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      tbl.decimal('amount')
        .notNullable()
        .unsigned()
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('recipe_ingredients_measurements')
    .dropTable('measurements')
    .dropTable('ingredients')
    .dropTable('steps')
    .dropTable('recipes')
    .dropTable('users')
};
