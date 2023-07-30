import express from 'express';
import { errorHandler, boomErrorHandler } from './middlewares/error.handler.js';
import cors from 'cors';

const whiteList = ['http://localhost:5173', '*'];

const app = express();

app.use(cors({ origin: whiteList }));
app.use(express.json());

// Routes
import routerApi from './routes/index.js';

// Settings
app.set('port', 3100);

// Routes
routerApi(app);

// Middlewares
app.use(boomErrorHandler);
app.use(errorHandler);

export default app;
