import { Request, Response } from 'express';
import debug from 'debug';

const debugAdmin = debug('app:authController');

async function signup(req: Request, res: Response) {
    debugAdmin(req.body)
    res.json(req.body);
}

export default {
    signup
}