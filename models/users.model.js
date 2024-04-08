const  sequelize  = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true,
        allowNull: false, 
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {type: DataTypes.STRING, unique: true},
    phone: {type: DataTypes.INTEGER, unique: true},
    password: {type: DataTypes.STRING},
})

User.sync({ alter:true })

module.exports = User