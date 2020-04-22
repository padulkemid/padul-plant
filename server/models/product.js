'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Product name cannot be empty!',
          },
        },
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Image URL cannot be empty!',
          },
          isUrl: {
            msg: 'Please input a valid URL!',
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: false,
          notEmpty: {
            msg: 'Price cannot be empty!',
          },
          isInt: {
            msg: 'Price must be a number!',
          },
          min: 5000,
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: false,
          notEmpty: {
            msg: 'Stock cannot be empty, if stocks are depleted please input 0',
          },
          min: 0,
        },
      },
      UserProductId: DataTypes.INTEGER,
    },
    { sequelize }
  );
  Product.associate = function (models) {
    Product.belongsTo(models.UserProduct);
  };
  return Product;
};
