import {DataTypes, Model} from "sequelize";
 import  {sequelize} from "../../db";

 export class UserRole extends Model{}

 UserRole.init({
    roleid:{
         type:DataTypes.SMALLINT,
         primaryKey:true
    },

   rolename :{
    type:DataTypes.STRING,
    allowNull: true

    }
 },{sequelize,modelName :'userrole'})