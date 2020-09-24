const server = require('./server')
const db = require('./data/cookbookModel')

server.get('/api/recipes', (req, res) => {
  db.getRecipes()
    .then(recipeList => {
      res.status(200).json(recipeList)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something went wrong', error: err })
    })
})

server.get('/api/recipes/:id/shoppingList', (req, res) => {
  const { id } = req.params
  db.getShoppingList(id)
    .then(shoppingList => {
      res.status(200).json(shoppingList)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something went wrong', error: err })
    })
})

server.get('/api/recipes/:id/instructions', (req, res) => {
  const { id } = req.params
  db.getInstructions(id)
    .then(instructions => {
      res.status(200).json(instructions)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something went wrong', error: err })
    })
})

server.get('/api/ingredients/:id/recipes', (req, res) => {
  const { id } = req.params
  db.getRecipesWithIngredient(id)
    .then(recipes => {
      res.status(200).json(recipes)
    })
    .catch(err => {
      res.status(500).json({ message: 'Sorry, something went wrong', error: err })
    })
})

server.listen(4000, () => {
  console.log('listening')
})