
exports.seed = function (knex) {
  return knex('steps').insert([
    { stepNumber: 1, instructions: 'In large saucepan, melt butter over low heat. Add marshmallows and sir until completely melted. Remove from heat', recipeId: 1 },
    { stepNumber: 2, instructions: 'Add Rice Krispies cereal. Stir until well coated', recipeId: 1 },
    { stepNumber: 3, instructions: 'Using buttered spatula or wax paper, evenly press mixture into a 13 x 9 x 2 inch pan coated with cooking spray. Cool. Cut into 2-inch squares. Best if served the same day', recipeId: 1 },
    { stepNumber: 1, instructions: 'Mix flour, cornstarch, eggs, salt, pepper, and oil together in a bowl until a smooth batter', recipeId: 2 },
    { stepNumber: 2, instructions: 'Cut up chicken and toss in batter.', recipeId: 2 },
    { stepNumber: 3, instructions: 'Place chicken and batter in the fridge for at least one hour.', recipeId: 2 },
    { stepNumber: 4, instructions: 'Mix soy sauce water, honey, and vinegar together in a bowl. Whisk with a fork until mixed completely', recipeId: 2 },
    { stepNumber: 5, instructions: 'Zest orange over sauce mixture, save orange for later.', recipeId: 2 },
    { stepNumber: 6, instructions: 'Cut up ginger and garlic', recipeId: 2 },
    { stepNumber: 7, instructions: 'Cut green onions and mix with crushed red pepper.', recipeId: 2 },
    { stepNumber: 8, instructions: 'Pan fry chicken in small batches, placing chicken on paper towels as removed.', recipeId: 2 },
    { stepNumber: 9, instructions: 'In a Wok, stir fry ginger and garlic in sesame oil until fragrent, and then toss green onion mixture in and stir fry until glossy', recipeId: 2 },
    { stepNumber: 10, instructions: 'Splash mirin into veggies and stir to distribute.', recipeId: 2 },
    { stepNumber: 11, instructions: 'Add orange sauce, and bring to a boil', recipeId: 2 },
    { stepNumber: 12, instructions: 'Add chicken back in, and bring back up to temp.', recipeId: 2 },
    { stepNumber: 13, instructions: 'Mix 1/4 cup water with 1tbsp cornstarch, add to sauce. Heat until sauce is viscous', recipeId: 2 },
    { stepNumber: 14, instructions: 'Add orange wedges and mix.', recipeId: 2 },
    { stepNumber: 15, instructions: 'Serve over hot rice', recipeId: 2 },
    { stepNumber: 1, instructions: 'Heat 4 cups vegetable oil in a deep-fryer or large saucepan to 375 degrees F (190 degrees C).', recipeId: 3 },
    { stepNumber: 2, instructions: 'Beat the egg in a mixing bowl. Add the chicken cubes; sprinkle with salt, 1 teaspoon sugar, and white pepper; mix well. Mix in 1 cup of cornstarch a little bit at a time until the chicken cubes are well coated.', recipeId: 3 },
    { stepNumber: 3, instructions: 'In batches, carefully drop the chicken cubes into the hot oil one by one, cooking until they turns golden brown and begin to float, about 3 minutes. Remove the chicken and allow to cool as you fry the next batch. Once all of the chicken has been fried, refry the chicken, starting with the batch that was cooked first. Cook until the chicken turns deep golden brown, about 2 minutes more. Drain on a paper towel-lined plate.', recipeId: 3 },
    { stepNumber: 4, instructions: 'Heat 2 tablespoons vegetable oil in a wok or large skillet over high heat. Stir in the green onion, garlic, whole chiles, and orange zest. Cook and stir a minute or two until the garlic has turned golden and the chiles brighten. Add 1/2 cup sugar, the ginger, chicken broth, vinegar, soy sauce, sesame oil, and peanut oil; bring to a boil and cook for 3 minutes.', recipeId: 3 },
    { stepNumber: 5, instructions: 'Dissolve 2 teaspoons of cornstarch into the water, and stir into the boiling sauce. Return to a boil and cook until the sauce thickens and is no longer cloudy from the cornstarch, about 1 minute. Stir the chicken into the boiling sauce. Reduce heat to low and cook for a few minutes until the chicken absorbs some of the sauce.', recipeId: 3 },
  ]);
};
