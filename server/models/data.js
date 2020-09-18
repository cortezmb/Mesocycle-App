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
      models.data.belongsTo(models.users, {foreignKey: 'user_id'})
    }
  };
  data.init({
    user_id: DataTypes.STRING,
    exercise: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data',
  });
  return data;
};