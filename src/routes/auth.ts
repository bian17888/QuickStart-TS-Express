import express from 'express';
import passport from 'passport';

import { middleware, signin, signup, profile } from '../controllers/auth';

const router = express.Router();

const index = () => {
    router.route('/logout').all((req, res) => {
        req.logOut();
        res.redirect('/');
    })
    router.route('/signin')
        .get(signin)
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        }));
    router.route('/signup').post(signup);
    router.route('/profile')
        .all(middleware)
        .get(profile);
    return router;
}

export default index;