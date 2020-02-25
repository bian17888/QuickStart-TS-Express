import axios from 'axios';
import { Parser } from 'xml2js';
import debug from 'debug';

const debugGoodreads = debug('app:goodreadsService');
const parser = new Parser({ explicitArray: false });

export function getById(id: any) {
    const result = new Promise((resolve, reject) => {
        const url = 'https://www.goodreads.com/book/show/50.xml?key=GTveg1vjb4UhftWUePfA2g';
        axios
            .get(url)
            .then((response) => {
                parser.parseString(response.data, (err: any, data: any) => {
                    if (err) {
                        debugGoodreads(err);
                    } else {
                        resolve(data);
                    }
                });
            })
            .catch((err) => {
                debugGoodreads(err);
                reject(err);
            });
    })
    return result;
}