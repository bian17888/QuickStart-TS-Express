import path from 'path';
import express from 'express';
import morgan from 'morgan';
import sql from 'mssql';

import homeController from './controllers/home';
import bookRouter from './routes/book';

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

// Create Express server
const app = express();

// Connect Database
(async function () {
    try {
        const pool = sql.connect(config);
    } catch (err) {

    }
})();



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