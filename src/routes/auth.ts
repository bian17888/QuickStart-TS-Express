import express from 'express';
import authControllers from '../controllers/auth';

const router = express.Router();

const index = () => {
    router.route('/signup').post(authControllers.signup)
    return router;
}

export default index;