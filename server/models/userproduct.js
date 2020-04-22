'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProduct = sequelize.define(
    'UserProduct',
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: true,
        },
      },
    },
    { sequelize }
  );
  UserProduct.associate = function (models) {
    UserProduct.hasMany(models.User);
    UserProduct.hasMany(models.Product);
  };
  return UserProduct;
};

