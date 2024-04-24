import "./config/env.config";
import express from 'express';
import { sequelize } from "./db";
import {router} from './api/routes/user.routes'; 
import {routes} from './api/routes/roles.routes';
import {tokeverification,extractToken} from './api/middleware/auth/user.auth'

const app = express();
const port = +(process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router);
app.use('/api/v1/role', routes);
app.use('api/v1//login',tokeverification,extractToken )

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch((err) => {
  console.error('Unable to connect to the database:', err);
});
