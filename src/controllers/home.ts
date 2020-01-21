import { Request, Response } from 'express';

/**
 * GET /
 * Home page.
 */
const index = (req: Request, res: Response) => {
    res.render('home', {
        title: 'Home Page',
        message: 'hello home page',
    });
}

export default index;