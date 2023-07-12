'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShowLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ShowLike.belongsTo(models.User, {foreignKey:"userId"})

      ShowLike.belongsTo(models.Show, {foreignKey:"showId"})
    }
  }
  ShowLike.init({
    showId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ShowLike',
  });
  return ShowLike;
};
