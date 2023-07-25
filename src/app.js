const express = require('express');
const {
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const cors = require('cors');

const whiteList = ['http://localhost:5173', '*'];

const app = express();

app.use(cors({ origin: whiteList }));
app.use(express.json());

// Routes
const routerApi = require('./routes');

// Settings
app.set('port', 4000);

// Routes
routerApi(app);

// Middlewares
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;
