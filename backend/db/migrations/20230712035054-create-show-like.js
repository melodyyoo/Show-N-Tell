'use strict';


/** @type {import('sequelize-cli').Migration} */
let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ShowLikes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
    }, options);
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "ShowLikes"
    await queryInterface.dropTable('ShowLikes');
  }
};
