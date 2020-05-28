'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    imagepath: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
    availability: DataTypes.TEXT,
    summary: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Category, {foreignKey:'categoryID'});
    //Product.belongsTo(models.Brand, {foreignKey:'brandID'});
    Product.hasMany(models.Product,{foreignKey: 'productID'});
    Product.hasMany(models.ProductSpecification, { foreignKey: 'productID'});
  }; 
  return Product;
};