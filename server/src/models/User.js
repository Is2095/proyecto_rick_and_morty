
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        // unique: true,U
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false,
    },

   }, { timestamps: false, tableName: 'users' });

   // el tableName le especificamos el nombre que nosotros queremos ponderle a la tabla
};
