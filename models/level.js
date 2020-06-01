'use strict';
module.exports = (sequelize, DataTypes) => {
    const Level = sequelize.define('Level', {
        name: DataTypes.STRING,
        imagepath: DataTypes.TEXT
    }, {});
    Level.associate = function(models) {
        // associations can be defined here
        Level.hasMany(models.CourseLevel, { foreignKey: 'levelId' });
    };
    return Level;
};