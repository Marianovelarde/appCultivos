const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('entityTareas', {
        idTarea: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
        fechaProgramada: {
            type: DataTypes.DATE, 
            allowNull: false,
        },
        fechaReal: {
            type: DataTypes.DATE,
        },
        estado: {
            type: DataTypes.ENUM('pendiente', 'en progreso', 'completada'),
            defaultValue: 'pendiente',
        },
        caracter: {
            type: DataTypes.ENUM('Urgente', 'Importante', 'Opcional', 'Seguimiento', 'Revisión', 'Otro', 'Obligatoria'),
            defaultValue: 'Opcional'     
        },
        prioridad: {
            type: DataTypes.ENUM('baja', 'media', 'alta'),
            defaultValue: 'baja',},
    
        idCultivo: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {timestamps: true});
}