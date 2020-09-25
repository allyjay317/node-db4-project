const db = require('knex')(require('../knexfile').development)

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredients_measurements as ref')
    .join('ingredients as i', 'ref.ingredient_id', 'i.id')
    .join('measurements as m', 'ref.measurement_id', 'm.id')
    .select('ref.id', 'ref.amount', 'm.name AS m_name', 'm.plural', 'i.name')
    .where({ "ref.recipe_id": recipe_id })
    .then(success => {
      return success.map(i => {
        return {
          id: i.id,
          ingredient: `${i.amount} ${i.amount > 1 ? i.plural : i.m_name} ${i.name}`
        }
      })

    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}

function getInstructions(recipe_id) {
  return db('steps as s')
    .select('s.id', 's.stepNumber', 's.instructions')
    .where({ recipeId: recipe_id })
    .orderBy('stepNumber', 'asc')
}

function getRecipesWithIngredient(ingredient_id) {
  return db('recipe_ingredients_measurements as ref')
    .join('ingredients as i', 'ref.ingredient_id', 'i.id')
    .join('recipes as r', 'ref.recipe_id', 'r.id')
    .select('r.id', 'r.name')
    .where({ 'ref.ingredient_id': ingredient_id })
    .then(success => {
      console.log(success)
      return success
    })
    .catch(err => {
      console.log(err)
      return Promise.reject(err)
    })
}


module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesWithIngredient
}