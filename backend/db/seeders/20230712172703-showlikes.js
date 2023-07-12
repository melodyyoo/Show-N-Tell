'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    options.tableName = 'ShowLikes';
    await queryInterface.bulkInsert(options, [
      {
        showId: 1,
        userId: 3
      },
      {
        showId: 1,
        userId:4
      },
      {
        showId: 2,
        userId: 4
      },
      {
        showId: 2,
        userId:3
      },
      {
        showId: 3,
        userId:4
      },
      {
        showId: 3,
        userId:1
      },
      {
        showId: 3,
        userId:6
      },
      {
        showId: 4,
        userId:3
      },
      {
        showId: 4,
        userId:2
      },
      {
        showId: 5,
        userId:1
      },
      {
        showId: 5,
        userId:3
      },
      {
        showId: 5,
        userId:2
      },
      {
        showId: 6,
        userId:5
      },
      {
        showId: 6,
        userId:4
      },
      {
        showId: 6,
        userId:3
      },
      {
        showId: 7,
        userId:3
      },
      {
        showId: 7,
        userId:2
      },
      {
        showId: 7,
        userId:6
      },
      {
        showId: 8,
        userId:4
      },
      {
        showId: 9,
        userId:2
      },
      {
        showId: 9,
        userId:5
      },
      {
        showId: 10,
        userId:3
      },
      {
        showId: 10,
        userId:4
      },
      {
        showId: 10,
        userId:6
      },
      {
        showId: 11,
        userId:3
      },
      {
        showId: 11,
        userId:4
      },
      {
        showId: 11,
        userId:5
      },
      {
        showId: 12,
        userId:4
      },
      {
        showId: 12,
        userId:1
      },
      {
        showId: 13,
        userId:2
      },
      {
        showId: 13,
        userId:6
      },
      {
        showId: 13,
        userId:5
      },
      {
        showId: 14,
        userId:2
      },
      {
        showId: 14,
        userId:3
      },
      {
        showId: 14,
        userId:5
      },
      {
        showId: 15,
        userId:2
      },
      {
        showId: 15,
        userId:6
      },
      {
        showId: 16,
        userId:3
      },
      {
        showId: 16,
        userId:5
      },
      {
        showId: 17,
        userId:4
      },
      {
        showId: 17,
        userId:1
      },
      {
        showId: 18,
        userId:6
      },
      {
        showId: 18,
        userId:4
      },
      {
        showId: 19,
        userId:2
      },
      {
        showId: 19,
        userId:3
      },
      {
        showId:20,
        userId:1
      },
      {
        showId: 20,
        userId:2
      },
      {
        showId: 20,
        userId:6
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
