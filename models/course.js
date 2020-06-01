'use strict';
module.exports = (sequelize, DataTypes) => {
    const Course = sequelize.define('Course', {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        summary: DataTypes.TEXT,
        description: DataTypes.TEXT,
        availability: DataTypes.BOOLEAN,
        imagepath: DataTypes.TEXT,
        thumbnailPath: DataTypes.TEXT,
        overallReview: DataTypes.DOUBLE,
        reviewCount: DataTypes.INTEGER
    }, {});
    Course.associate = function(models) {
        // associations can be defined here
        Course.belongsTo(models.Teacher, { foreignKey: 'teacherId' });
        Course.belongsTo(models.Category, { foreignKey: 'categoryId' });
        Course.hasMany(models.CourseLevel, { foreignKey: 'courseId' });
        Course.hasMany(models.CourseSpecification, { foreignKey: 'courseId' });
        Course.hasMany(models.Comment, { foreignKey: 'courseId' });
        Course.hasMany(models.Review, { foreignKey: 'courseId' });
    };
    return Course;
};