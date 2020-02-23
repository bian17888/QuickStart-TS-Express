import { Request, Response } from 'express';
import { MongoClient, ObjectID } from 'mongodb';
import debug from 'debug';

const debugAdmin = debug('app:authController');

// The config of mongodb
const url = 'mongodb://localhost:27017';
const dbName = 'express-demo';
const colName = 'books';

async function signup(req: Request, res: Response) {
    debugAdmin(req.body);
    let client;
    try {
        // create user 
        client = await MongoClient.connect(url);
        debugAdmin('Connected correctly to server');
        const db = client.db(dbName);
        const col = db.collection('users');
        const result = col.insertOne(req.body);
        debugAdmin(result);

        // redirect 
        req.login(req.body, () => {
            res.redirect('/auth/profile')
        })
    } catch (err) {
        debugAdmin(err);
    }
}

async function profile(req: Request, res: Response) {
    res.json(req.user);
}

export default {
    signup,
    profile
}