'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.data.hasMany(models.users, {foreignKey: 'user_id'});
      models.data.hasMany(models.categories, {foreignKey: 'category_id'});
      models.data.hasMany(models.exercises, {foreignKey: 'exercise_id'})
    }
  };
  data.init({
    exercise: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    exercise_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data',
  });
  return data;
};