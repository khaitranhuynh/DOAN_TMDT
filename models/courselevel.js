'use strict';
module.exports = (sequelize, DataTypes) => {
    const CourseLevel = sequelize.define('CourseLevel', {
        imagepath: DataTypes.TEXT
    }, {});
    CourseLevel.associate = function(models) {
        // associations can be defined here
        CourseLevel.belongsTo(models.Level, { foreignKey: 'levelId' });
        CourseLevel.belongsTo(models.Course, { foreignKey: 'courseId' });
    };
    return CourseLevel;
};