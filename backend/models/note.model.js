'use strict';

module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('note', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING(128)
        },
        content: {
            allowNull: true,
            type: DataTypes.STRING(8192)
        },
        is_archived: {
            allowNull: false,
            type: DataTypes.BOOLEAN
        }
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: 'notes',
        classMethods: {}
    });
    return Note;
};