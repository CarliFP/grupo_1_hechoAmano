'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsers: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      address: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING
      },
      idTypeUser: {
        type: Sequelize.INTEGER
      },
      idCountry: {
        type: Sequelize.INTEGER
      },
      pass: {
        type: Sequelize.STRING
      },
      Tienda_idTienda: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};