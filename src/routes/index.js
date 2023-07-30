import usersRouter from './users.router.js';

const routerApi = (app) => {
  app.get('/', (req, res) => {
    res.send('Hola desde mi server en express');
  });
  app.use('/users', usersRouter);
};

export default routerApi;
