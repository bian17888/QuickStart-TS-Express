import path from 'path';
import express from 'express';
import morgan from 'morgan';

import homeController from './controllers/home';
import bookRouter from './routes/book';

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use('/static', express.static(path.join(__dirname, '../static')));
app.use(morgan('tiny'));

/**
 * Primary app routes.
 */
app.use('/books', bookRouter());
app.get("/", homeController);

export default app;