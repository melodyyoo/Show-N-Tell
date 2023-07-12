'use strict';


/** @type {import('sequelize-cli').Migration} */
let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      body: {
        type: Sequelize.STRING(200),
        allowNull:"false"
      },
      reviewId: {
        type: Sequelize.INTEGER,
        references:{model:"Reviews"},
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
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Comments"
    await queryInterface.dropTable('Comments');
  }
};
