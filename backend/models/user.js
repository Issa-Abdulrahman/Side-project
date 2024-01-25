import { Model } from "sequelize";
export default(sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {

      User.hasMany(models.MemeModel, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};