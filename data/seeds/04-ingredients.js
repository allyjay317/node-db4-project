
exports.seed = function (knex) {
  return knex('ingredients').insert([
    { name: 'Rice Krispy Cereal' },   //1
    { name: 'Marshmallows' },         //2
    { name: 'Unsalted Butter' },      //3
    { name: 'Eggs' },                 //4
    { name: 'Cornstarch' },           //5
    { name: 'Flour' },                //6
    { name: 'Toasted Sesame Oil' },   //7
    { name: 'Salt' },                 //8
    { name: 'White Pepper' },         //9
    { name: 'Green Onion' },          //10
    { name: 'Garlic' },               //11
    { name: 'Minced Ginger' },        //12
    { name: 'Crushed Red Pepper' },   //13
    { name: 'Mirin' },                //14
    { name: 'Soy Sauce' },            //15
    { name: 'Water' },                //16
    { name: 'Honey' },                //17
    { name: 'White Vinegar' },        //18
    { name: 'Orange Zest' },          //19
    { name: 'Vegetable Oil' },        //20
    { name: 'Chicken Thighs' },       //21
    { name: 'Sugar' },                //22
    { name: 'Chopped Green Onion' },  //23
    { name: 'Dried Whole Chilies' },  //24
    { name: 'Ground Ginger' },        //25
    { name: 'Chicken Broth' },        //26
    { name: 'Rice Vinegar' },         //27
    { name: 'Sesame Oil' },           //28
    { name: 'Peanut Oil' },           //29

  ]);
};
