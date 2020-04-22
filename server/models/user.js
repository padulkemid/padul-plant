'use strict';
const { hashPassword } = require('../helpers/bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Email cannot be empty!',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Password cannot be empty!',
          },
          lengthBelowSix(value) {
            if (value < 6) {
              throw new Error('Password length must be greater than 6 characters!');
            }
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Username cannot be empty!',
          },
        },
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: true,
          notEmpty: {
            msg: 'Role must exist!',
          },
        },
      },
      UserProductId: DataTypes.INTEGER,
    },
    { sequelize }
  );

  User.addHook('afterValidate', async function (user, options) {
    const newPassword = await hashPassword(user.password);
    user.password = newPassword;
  });

  User.associate = function (models) {
    User.belongsTo(models.UserProduct);
  };
  return User;
};

