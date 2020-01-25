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

const detail = (req: Request, res: Response) => {
    const book = {
        title: 'War and Peace',
        genre: 'Historical Fiction',
        author: 'Lev Nikolayevich Tolstoy',
        read: true
    }
    const { id } = req.params;
    res.render('book/detail', {
        data: book
    })
}

export default {
    index,
    detail
};