const { db } = require('./connection');
const { Dish } = require('./models/Dish');
const { Person } = require('./models/Person');

// Create your associations here!

Person.hasOne(Dish);
Dish.belongsTo(Person);

module.exports = {
  db,
  Dish,
  Person,
};
