import { Request, Response, NextFunction } from 'express'
import { MongoClient, ObjectID } from 'mongodb';
import debug from 'debug';

const debugBook = debug('app:bookController');

// The config of mongodb
const url = 'mongodb://localhost:27017';
const dbName = 'express-demo';
const colName = 'books';

export function middleware(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
}

export async function getIndex(req: Request, res: Response) {
    let client;
    try {
        // Connect using MongoClient
        client = await MongoClient.connect(url);
        const col = client.db(dbName).collection(colName);

        const result = await col.find({}).toArray();
        debugBook(result);
        res.render('book/list', {
            data: result
        })
    } catch (err) {

    }
    client.close();
}

export async function getById(req: Request, res: Response) {
    const { id } = req.params;
    const _id = new ObjectID(id);
    let client;

    try {
        // Connect using MongoClient
        client = await MongoClient.connect(url);
        const col = client.db(dbName).collection(colName);

        const result = await col.findOne({ _id });
        debugBook(result);
        res.render('book/detail', {
            data: result
        })
    } catch (err) {
        debug(err);
    }
}