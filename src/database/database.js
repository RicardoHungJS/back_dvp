import { createPool } from 'mysql2/promise';
import config from '../config.js';

export const pool = createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
});
