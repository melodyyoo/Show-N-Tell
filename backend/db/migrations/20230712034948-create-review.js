'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.STRING(600),
        allowNull:false
      },
      watchedDate: {
        type: Sequelize.DATEONLY,
        allowNull:false
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      showId: {
        type: Sequelize.INTEGER,
        references:{model:"Shows"},
        onDelete:"cascade"
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{model:"Users"},
        onDelete:"cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reviews');
  }
};