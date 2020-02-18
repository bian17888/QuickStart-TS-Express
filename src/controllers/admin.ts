import { Request, Response } from 'express';
import { MongoClient } from 'mongodb';
import debug from 'debug';

const debugAdmin = debug('app:adminController');

async function index(req: Request, res: Response) {

    // Connection url
    const url = 'mongodb://localhost:27017';
    // Database Name
    const dbName = 'express-demo';

    let client;

    // Connect using MongoClient
    try {
        client = await MongoClient.connect(url);
        // Create a collection we want to drop later
        const col = client.db(dbName).collection('books');
        // Show that duplicate records got dropped
        const items = await col.find({}).toArray();
        res.json(items);
    } catch (err) {

    }
    client.close();
}

export default {
    index
}