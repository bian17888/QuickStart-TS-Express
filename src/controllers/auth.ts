import { Request, Response, NextFunction } from 'express';
import { MongoClient } from 'mongodb';
import debug from 'debug';

const debugAdmin = debug('app:authController');

// The config of mongodb
const url = 'mongodb://localhost:27017';
const dbName = 'express-demo';
const colName = 'users';

export function middleware(req: Request, res: Response, next: NextFunction) {
    if (req.user) {
        next();
    } else {
        res.redirect('/');
    }
}

export async function signin(req: Request, res: Response) {
    res.render('signin', {});
}

export async function signup(req: Request, res: Response) {
    debugAdmin(req.body);
    let client;
    try {
        // create user 
        client = await MongoClient.connect(url);
        debugAdmin('Connected correctly to server');
        const db = client.db(dbName);
        const col = db.collection(colName);
        const result = await col.insertOne(req.body);
        debugAdmin(result);

        // redirect 
        req.login(result.ops[0], () => {
            res.redirect('/auth/profile')
        })
    } catch (err) {
        debugAdmin(err);
    }
}

export async function profile(req: Request, res: Response) {
    res.json(req.user);
}