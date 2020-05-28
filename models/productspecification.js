'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductSpecification = sequelize.define('ProductSpecification', {
    description: DataTypes.TEXT
  }, {});
  ProductSpecification.associate = function(models) {
    // associations can be defined here
    ProductSpecification.belongsTo(models.Product, { foreignKey:'productID' });
    ProductSpecification.belongsTo(models.Specification, { foreignKey:'specificationID' });
  };
  return ProductSpecification;
};