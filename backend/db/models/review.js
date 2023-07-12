'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.hasMany(models.Comment, {foreignKey:'reviewId', onDelete:"cascade", hooks:true})

      Review.hasMany(models.ReviewLike, {foreignKey:'reviewId', onDelete:'cascade', hooks:true})

      Review.belongsTo(models.Show, {foreignKey:"showId"})

      Review.belongsTo(models.User, {foreignKey:"userId", onDelete:"cascade", hooks:true})
    }
  }
  Review.init({
    body: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[1,600]
      }
    },
    watchedDate: {
      type:DataTypes.DATEONLY,
      allowNull:false,
      validate:{
        isDate:true
      }
    },
    rating:{
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        min: 1,
        max: 5
      }
    },
    showId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
