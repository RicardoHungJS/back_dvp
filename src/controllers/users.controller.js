import { pool } from './../database/database.js';
import boom from '@hapi/boom';

class usersService {
  async connectDatabaseAndQueryRequest(query) {
    let connection;
    try {
      connection = await pool.getConnection();
      return await connection.query(query);
    } catch (error) {
      console.log(error);
      throw boom.badGateway('UPS! Algo pasó con la base de datos');
    }
  }

  async getUsers() {
    const queryString = 'SELECT * FROM users';
    const result = await this.connectDatabaseAndQueryRequest(queryString);
    return result[0];
  }

  async setUser({ id, loginName, avatarUrl, profileUrl }) {
    const queryString = `INSERT INTO users (id, login, avatar_url, html_url) VALUES ('${id}' ,'${loginName}', '${avatarUrl}', '${profileUrl}')`;
    await this.connectDatabaseAndQueryRequest(queryString);
  }
}

export default usersService;
