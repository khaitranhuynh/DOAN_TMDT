'use strict';
module.exports = (sequelize, DataTypes) => {
    const CourseSpecification = sequelize.define('CourseSpecification', {
        description: DataTypes.TEXT
    }, {});
    CourseSpecification.associate = function(models) {
        // associations can be defined here
        CourseSpecification.belongsTo(models.Specification, { foreignKey: 'specificationId' });
        CourseSpecification.belongsTo(models.Course, { foreignKey: 'CourseId' });
    };
    return CourseSpecification;
};