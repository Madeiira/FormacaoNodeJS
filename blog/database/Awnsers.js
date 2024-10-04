const Sequelize = require('sequelize');
const connection = require('./database');

const Awnsers = connection.define("awnsers",{
    awnser:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    questionId:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Awnsers.sync({force: false});

module.exports = Awnsers;