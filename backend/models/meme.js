import { Model } from "sequelize";
export default (sequelize, DataTypes) => {
  class Meme extends Model {
    static associate(models) {
      Meme.belongsTo(models.UserModel, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      
    }
  }
  Meme.init({
    image: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Meme',
  });
  return Meme;
};