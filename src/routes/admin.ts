import express from 'express';
import adminControllers from '../controllers/admin';

const router = express.Router();

const index = () => {
    router.route('/').get(adminControllers.index)
    return router;
}

export default index;