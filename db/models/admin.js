'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('admin', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING,
    gender:DataTypes.STRING,
    age:DataTypes.STRING

  }, {});
  admin.associate = function(models) {
    admin.hasMany(models.blog)
    // associations can be defined here
  };
  return admin;
};