import { Request, Response } from 'express'

async function index(req: Request, res: Response) {
    res.send('admin page');
}

export default {
    index
}