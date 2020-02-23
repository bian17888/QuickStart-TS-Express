/**
 * 1 Import Dependencies
 */
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

import homeController from './controllers/home';
import bookRouter from './routes/book';
import adminRouter from './routes/admin';
import authRouter from './routes/auth';
import passport from './config/passport';

const app = express();


/**
 * 2 Express configuration
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');


/**
 * 3 Connect Database
 */


/**
 * 4 Use Middleware
 */
app.use('/static', express.static(path.join(__dirname, '../static')));
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'library' }))
passport(app);


/**
 * 5 Set Routes.
 */
app.use('/books', bookRouter());
app.use('/admin', adminRouter());
app.use('/auth', authRouter());
app.get("/", homeController);

export default app;