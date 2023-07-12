'use strict';

/** @type {import('sequelize-cli').Migration} */

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}
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
    options.tableName = 'ReviewLikes';
    await queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        userId: 3
      },
      {
        reviewId: 1,
        userId: 4
      },
      {
        reviewId: 22,
        userId: 5
      },
      {
        reviewId: 2,
        userId: 2
      },
      {
        reviewId: 2,
        userId: 3
      },
      {
        reviewId: 2,
        userId: 4
      },
      {
        reviewId:2,
        userId: 5
      },
      {
        reviewId: 3,
        userId: 2
      },
      {
        reviewId: 3,
        userId:1
      },
      {
        reviewId:3,
        userId:6
      },
      {
        reviewId: 4,
        userId: 2
      },
      {
        reviewId:4,
        userId:1
      },
      {
        reviewId:5,
        userId:2
      },
      {
        reviewId:5,
        userId:3
      },
      {
        reviewId:6,
        userId:4
      },
      {
        reviewId:7,
        userId:3
      },
      {
        reviewId:8,
        userId:4
      },
      {
        reviewId:9,
        userId:1
      },
      {
        reviewId:9,
        userId:3
      },
      {
        reviewId:10,
        userId:2
      },
      {
        reviewId:10,
        userId:1
      },
      {
        reviewId:11,
        userId:4
      },
      {
        reviewId:11,
        userId:5
      },
      {
        reviewId:12,
        userId:1
      },
      {
        reviewId:12,
        userId:6
      },
      {
        reviewId:13,
        userId:4
      },
      {
        reviewId:13,
        userId:5
      },
      {
        reviewId:14,
        userId:3
      },
      {
        reviewId:14,
        userId:1
      },
      {
        reviewId:15,
        userId:2
      },
      {
        reviewId:15,
        userId:1
      },
      {
        reviewId:15,
        userId:6
      },
      {
        reviewId:16,
        userId:3
      },
      {
        reviewId:16,
        userId:2
      },
      {
        reviewId:16,
        userId:5
      },
      {
        reviewId:17,
        userId:3
      },
      {
        reviewId:17,
        userId:4
      },
      {
        reviewId:17,
        userId:5
      },
      {
        reviewId:18,
        userId:4
      },
      {
        reviewId:18,
        userId:2
      },
      {
        reviewId:18,
        userId:6
      },
      {
        reviewId:19,
        userId:2
      },
      {
        reviewId:19,
        userId:3
      },
      {
        reviewId:20,
        userId:1
      },
      {
        reviewId:21,
        userId:1
      },
      {
        reviewId:21,
        userId:3
      },
      {
        reviewId:23,
        userId:1
      },
      {
        reviewId:23,
        userId:3
      },
      {
        reviewId:24,
        userId:1
      },
      {
        reviewId:24,
        userId:2
      },
      {
        reviewId:25,
        userId:4
      },
      {
        reviewId:25,
        userId:5
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = "ReviewLikes"
    await queryInterface.bulkDelete(options)
  }
};
