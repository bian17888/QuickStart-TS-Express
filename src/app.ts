/**
 * 1 Import Dependencies
 */
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import sql from 'mssql';

import homeController from './controllers/home';
import bookRouter from './routes/book';
import adminRouter from './routes/admin';

const config = {
    user: 'beck',
    password: 'bK100200',
    server: 'test-nodejs-server.database.chinacloudapi.cn',
    database: 'test-nodejs-db',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true
    }
}
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
(async function () {
    try {
        const pool = sql.connect(config);
    } catch (err) {
        console.log(err);
    }
})();


/**
 * 4 Use Middleware
 */
app.use('/static', express.static(path.join(__dirname, '../static')));
app.use(morgan('tiny'));


/**
 * 5 Set Routes.
 */
app.use('/books', bookRouter());
app.use('/admin', adminRouter());
app.get("/", homeController);

export default app;