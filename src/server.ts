import app from './app';

const port = app.get('port') || 3000;

app.get('/', (req, res) => res.send('Hello World!'));

/**
 * Start Express server.
 */
const server = app.listen(port, () => {
    console.log("App is running at http://localhost:%d in %s mode", app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

export default server;