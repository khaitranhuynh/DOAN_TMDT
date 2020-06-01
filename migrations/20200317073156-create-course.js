'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      summary: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      availability: {
        type: Sequelize.BOOLEAN
      },
      imagepath: {
        type: Sequelize.TEXT
      },
      thumbnailPath: {
        type: Sequelize.TEXT
      },
      overallReview: {
        type: Sequelize.DOUBLE
      },
      reviewCount: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Courses');
  }
};