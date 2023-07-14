'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Show extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Show.hasMany(models.Review,{foreignKey:"showId", onDelete:"cascade", hooks:true})

      Show.hasMany(models.ShowLike, {foreignKey:"showId", onDelete:"cascade", hooks:true})

      Show.belongsTo(models.User, {foreignKey:"userId"})
    }
  }
  Show.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    image: {
      type:DataTypes.STRING,
      validate:{
        isUrl:true
      }
    },
    banner:{
      type:DataTypes.STRING,
      validate:{
        isUrl:true
      }
    },
    genre:{
      type:DataTypes.STRING,
      allowNull:false
    },
    startYear: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    endYear: DataTypes.INTEGER,
    director: {
      type:DataTypes.STRING,
      allowNull:false
    },
    synopsis:{
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        len:[1,600]
      }
    },
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Show',
  });
  return Show;
};
