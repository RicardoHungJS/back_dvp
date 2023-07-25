const usersRouter = require('./users.router');

const routerApi = (app) => {
  app.get('/', (req, res) => {
    res.send('Hola desde mi server en express');
  });
  app.use('/users', usersRouter);
};

module.exports = routerApi;
