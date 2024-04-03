import { Sequelize } from 'sequelize-typescript';
import { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER, DB_PORT } from './utils/config';

const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: 'postgres',
  password: DB_PASSWORD,
  username: DB_USER,
  host: DB_HOST,
  port: DB_PORT,
  models: [__dirname + '/models'],
  logging: false,
  native: false
});

export default sequelize;
