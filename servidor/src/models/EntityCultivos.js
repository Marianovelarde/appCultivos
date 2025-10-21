const {DataTypes} = require('sequelize');  

module.exports = (sequelize) => {
    sequelize.define('entityCultivos', {
        idCultivo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaDeInicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechadeFinal: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        notas: {
            type: DataTypes.STRING,
            allowNull: true,

        }, 
        // caracter: {
        //     type: DataTypes.ENUM('Urgente', 'Importante', 'Opcional', 'Seguimiento', 'Revisión', 'Otro'),
        //     defaultValue: 'Opcional',
        //     allowNull: false,
        // },
        idUser: {
            type: DataTypes.INTEGER,
        }

    }, {timestamps: true});}
