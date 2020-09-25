
exports.seed = function (knex) {
  return knex('measurements').insert([
    { name: 'tablespoon', plural: 'tablespoons', abreviation: 'tbsp' },   //1
    { name: 'ounce', plural: 'ounces', abreviation: 'oz' },               //2
    { name: 'cup', plural: 'cups' },                                      //3
    { name: 'unit', plural: 'unit', abreviation: '' },                    //4
    { name: 'teaspoon', plural: 'teaspoons', abreviation: 'tsp' },        //5
    { name: 'stalk', plural: 'stalks' },                                  //6
    { name: 'inch', plural: 'inches', abreviation: '\"' },                //7
    { name: 'splash', plural: 'splashes' },                               //8
    { name: 'pound', plural: 'pounds', abreviation: 'lbs' },              //9
    { name: 'pinch', plural: 'pinches' },                                 //10
    { name: 'clove', plural: 'cloves' }                                   //11
  ]);
};
