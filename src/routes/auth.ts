import express from 'express';
import passport from 'passport';

import authControllers from '../controllers/auth';

const router = express.Router();

const index = () => {
    router.route('/signin').get(authControllers.signin);
    router.route('/signin').post(passport.authenticate('local', {
        successRedirect: '/auth/profile',
        failureRedirect: '/'
    }));
    router.route('/signup').post(authControllers.signup);
    router.route('/profile').get(authControllers.profile);
    return router;
}

export default index;