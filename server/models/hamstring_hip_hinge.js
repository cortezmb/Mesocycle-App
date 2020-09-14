'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hamstring_hip_hinge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  hamstring_hip_hinge.init({
    exercise: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'hamstring_hip_hinge',
  });
  return hamstring_hip_hinge;
};