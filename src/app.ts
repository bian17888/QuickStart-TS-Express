import path from 'path';
import express from 'express';

import homeController from './controllers/home';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

/**
 * Primary app routes.
 */
app.get("/", homeController);


export default app;