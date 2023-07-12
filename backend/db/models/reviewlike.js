'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReviewLike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReviewLike.belongsTo(models.Review,{foreignKey:"reviewId"})

      ReviewLike.belongsTo(models.User, {foreignKey:"userId"})
    }
  }
  ReviewLike.init({
    reviewId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ReviewLike',
  });
  return ReviewLike;
};
