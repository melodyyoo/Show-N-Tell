'use strict';
const {
  Model, Validator
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Comment, {foreignKey:"userId", onDelete:"cascade", hooks:true})

      User.hasMany(models.Profile, {foreignKey:"userId", onDelete:"cascade", hooks:true})

      User.hasMany(models.Show, {foreignKey:"userId", onDelete:"cascade", hooks:true})

      User.hasMany(models.Review, {foreignKey:"userId", onDelete:"cascade", hooks:true})

      User.hasMany(models.ShowLike, {foreignKey:"userId", onDelete:"cascade", hooks:true})

      User.hasMany(models.ReviewLike, {foreignKey:"userId", onDelete:"cascade", hooks:true})

      User.hasOne(models.Profile, {foreignKey: 'userId'})
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      validate:{
        len: [4,30],
        isNotEmail(value){
          if(Validator.isEmail(value)){
            throw new Error("Cannot be an email.")
          }
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[6,256],
        isEmail:true
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate:{
        len: [60,60]
      }
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'User',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt']
      }
    }
  });
  return User;
};
