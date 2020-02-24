import express from 'express';
import { middleware, getIndex, getById } from '../controllers/book'

const router = express.Router();

const index = () => {
    router.use(middleware);
    router.route('/').get(getIndex);
    router.route('/:id').get(getById);
    return router;
}

export default index;