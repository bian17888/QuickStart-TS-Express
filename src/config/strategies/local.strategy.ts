import passport from 'passport';
import { Strategy } from 'passport-local';

export default function () {
    passport.use(new Strategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        }, (username, password, done) => {
            const user = {
                username,
                password
            };
            done(null, user);
        }
    ))
}