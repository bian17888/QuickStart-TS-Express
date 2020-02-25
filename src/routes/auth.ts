import express from 'express';
import passport from 'passport';

import { middleware, signupPage, signup, profile } from '../controllers/auth';

const router = express.Router();

const index = () => {
    router.route('/logout').all((req, res) => {
        req.logOut();
        res.redirect('/');
    })
    router.route('/signin')
        .post(passport.authenticate('local', {
            successRedirect: '/auth/profile',
            failureRedirect: '/'
        }));
    router.route('/signup')
        .get(signupPage)
        .post(signup);
    router.route('/profile')
        .all(middleware)
        .get(profile);
    return router;
}

export default index;