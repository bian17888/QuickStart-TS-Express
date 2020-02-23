import express from 'express';
import passport from 'passport';
import initStrategy from './strategies/local.strategy';

export default function (app: express.Application) {
    initStrategy();

    passport.serializeUser((user, done) => {
        done(null, user)
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    app.use(passport.initialize());
    app.use(passport.session())

}