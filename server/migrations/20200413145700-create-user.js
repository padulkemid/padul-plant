'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        email: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        username: {
          type: Sequelize.STRING,
        },
        role: {
          type: Sequelize.STRING,
        },
        UserProductId: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() =>
        queryInterface.addConstraint('Users', ['email', 'username'], {
          type: 'unique',
        })
      );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  },
};

