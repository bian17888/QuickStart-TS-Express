import { Request, Response } from 'express'
import { MongoClient, ObjectID } from 'mongodb';
import sql from 'mssql';
import debug from 'debug';

const debugBook = debug('app:bookController');

// The config of mongodb
const url = 'mongodb://localhost:27017';
const dbName = 'express-demo';
const colName = 'books';

async function index(req: Request, res: Response) {
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

async function detail(req: Request, res: Response) {
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

export default {
    index,
    detail
};