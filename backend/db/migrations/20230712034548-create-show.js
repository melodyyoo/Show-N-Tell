"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA;
}
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Shows",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        banner: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        genre: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        year: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        director: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        synopsis: {
          type: Sequelize.STRING(600),
          allowNull: false,
        },
        userId: {
          type: Sequelize.INTEGER,
          references: { model: "Users" },
          onDelete: "cascade",
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      },
      options
    );

    // options.tableName = "Shows"
    // await queryInterface.addConstraint("Shows", {
    //   fields: ["name", "director"],
    //   type: "unique",
    //   name: "unique-director-show",
    //   references: {
    //     table: {
    //       tableName: "Shows",
    //       schema: process.env.SCHEMA,
    //     },
    //   },
    // });
  },
  async down(queryInterface, Sequelize) {
    options.tableName = "Shows";
    await queryInterface.dropTable(options);
  },
};
