import { Request, Response } from 'express'
import sql from 'mssql';
import debug from 'debug'

async function index(req: Request, res: Response) {
    const request = new sql.Request();
    try {
        const result = await request.query('select * from books');
        debug('app:bookController')(result);
        res.render('book/list', {
            data: result.recordset
        })
    } catch (err) {

    }
}

async function detail(req: Request, res: Response) {
    const { id } = req.params;
    const request = new sql.Request();

    try {
        const result = await request.query('SELECT TOP (1) * FROM books WHERE id=' + id);
        debug('app:bookController')(result);
        res.render('book/detail', {
            data: result.recordset[0]
        })
    } catch (err) {
        debug(err);
    }
}

export default {
    index,
    detail
};