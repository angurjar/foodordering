import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../db";

export class User extends Model {}

User.init({
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  roles:{
    type:DataTypes.JSON,
    allowNull:true,
    // defaultValue:{"roles":[{
    //   "role_name": "role_user"
    // }]}
    
  },
  status:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  },
  dob:{
type:DataTypes.DATE
  }
}, {
  sequelize, modelName: 'users' 
})
