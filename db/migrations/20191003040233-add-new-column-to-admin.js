"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "admins",
          "gender",
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        ),queryInterface.addColumn(
          "admins",
          "age",
          {
            type: Sequelize.INTEGER
          },
          { transaction: t }
        ),
        queryInterface.addColumn(
          "admins",
          "address",
          {
            type: Sequelize.STRING
          },
          { transaction: t }
        )
      ]);
    });
    // return queryInterface.addColumn("admins", "gender" {
    //   type: Sequelize.STRING,
    //   defaultValue: "U"
    // });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("admins", "gender");
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
