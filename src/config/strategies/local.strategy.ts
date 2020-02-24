import passport from 'passport';
import { Strategy } from 'passport-local';
import { MongoClient } from 'mongodb';
import debug from 'debug';

const debugLocalStrategy = debug('app:local.strategy');

export default function () {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        }, (username, password, done) => {
            (async function mongo() {
                // The config of mongodb
                const url = 'mongodb://localhost:27017';
                const dbName = 'express-demo';
                const colName = 'users';

                let client;
                try {
                    client = await MongoClient.connect(url);
                    const db = client.db(dbName);
                    const col = db.collection(colName);

                    const user = await col.findOne({ username });
                    debugLocalStrategy('===== user =====');
                    debugLocalStrategy(user);
                    if (user && user.password === password) {
                        done(null, user);
                    } else {
                        done(null, false);
                    }
                } catch (err) {
                    debugLocalStrategy(err);
                    done(err);
                }
                client.close();
            }());
        }
    ))
}