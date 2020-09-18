'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exercises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.exercises.belongsTo(models.categories, {foreignKey: 'category_id'})
      models.exercises.hasMany(models.data, {foreignKey: 'category_id'})
    }
  };
  exercises.init({
    exercise: DataTypes.STRING,
    link: DataTypes.STRING,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'exercises',
  });
  return exercises;
};