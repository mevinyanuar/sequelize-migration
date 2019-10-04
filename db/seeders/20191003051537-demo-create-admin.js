"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("admins", [
      {
        name: "john",
        email: "demo@demo.com",
        password: "123",
        createdAt: "2019-10-02 05:25:13",
        updatedAt: "2019-10-02 05:25:13"
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("admins", null, {});
  }
};
