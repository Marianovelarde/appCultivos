const {DataTypes} = require('sequelize')
module.exports = (sequelize) => {
    sequelize.define('entityUsers', {
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        usuario: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {timestamps: false});
}