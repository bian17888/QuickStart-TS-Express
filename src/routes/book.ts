import express from 'express';

import bookController from '../controllers/book'

const router = express.Router();

const index = () => {
    router.route('/').get(bookController.index);
    router.route('/:id').get(bookController.detail);
    return router;
}

export default index;