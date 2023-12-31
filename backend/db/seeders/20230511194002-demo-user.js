'use strict';

/** @type {import('sequelize-cli').Migration} */

const bcrypt = require("bcryptjs");

let options = {};
if(process.env.NODE_ENV === 'production'){
  options.schema = process.env.SCHEMA
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
   options.tableName = 'Users';
   return queryInterface.bulkInsert(options, [
     {
       email: 'demo@user.io',
       username: 'Demo-lition',
       hashedPassword: bcrypt.hashSync('password'),
       firstName: 'Peter',
       lastName: 'Reeves'
     },
     {
       email: 'user1@user.io',
       username: 'FakeUser1',
       hashedPassword: bcrypt.hashSync('password'),
       firstName: 'Kim',
       lastName: 'Bailey'
     },
     {
       email: 'user2@user.io',
       username: 'FakeUser2',
       hashedPassword: bcrypt.hashSync('password'),
       firstName: 'Sandra',
       lastName: 'Park'
     },
     {
      email: 'user3@user.io',
      username: 'FakeUser3',
      hashedPassword: bcrypt.hashSync('password'),
      firstName: 'Harry',
      lastName: 'Swift'
    },
    {
      email: 'user4@user.io',
      username: 'FakeUser4',
      hashedPassword: bcrypt.hashSync('password'),
      firstName: 'Sam',
      lastName: 'Bates'
    },
    {
      email: 'user5@user.io',
      username: 'FakeUser5',
      hashedPassword: bcrypt.hashSync('password'),
      firstName: 'Matthew',
      lastName: 'Howard'
    }
    ], {});
  },
  //test

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: {[Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2']}
    }, {})
  }
};
