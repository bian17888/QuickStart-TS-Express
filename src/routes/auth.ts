import express from 'express';
import passport from 'passport';

import authControllers from '../controllers/auth';

const router = express.Router();

const index = () => {
    router.route('/logout').all((req, res) => {
        req.logOut();
        res.redirect('/');
    })
    router.route('/signin')
        .get(authControllers.signin)
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        }));
    router.route('/signup').post(authControllers.signup);
    router.route('/profile')
        .all((req, res, next) => {
            if (req.user) {
                next();
            } else {
                res.redirect('/');
            }
        })
        .get(authControllers.profile);
    return router;
}

export default index;