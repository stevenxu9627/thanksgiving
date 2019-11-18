const Sequelize = require('sequelize');
const { db } = require('../connection');

const Person = db.define('person', {
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    isAttending: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = { Person };
