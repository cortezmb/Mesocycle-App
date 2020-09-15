'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class incline_push_or_front_delts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  incline_push_or_front_delts.init({
    exercise: DataTypes.STRING,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'incline_push_or_front_delts',
  });
  return incline_push_or_front_delts;
};