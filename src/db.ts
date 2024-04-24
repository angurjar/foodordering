
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize({
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: 'Annu@1998',
    database: 'foodordering',
    dialect:'postgres'
});
(async()=>{
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }})

