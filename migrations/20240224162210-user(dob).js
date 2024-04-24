'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("users","dob",{
      type:Sequelize.DATE
    })
  },

  async down (queryInterface, Sequelize) {
await queryInterface.removeColumn("users","dob")
  }
};
