'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class horizontal_push extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  horizontal_push.init({
    exercise: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'horizontal_push',
  });
  return horizontal_push;
};