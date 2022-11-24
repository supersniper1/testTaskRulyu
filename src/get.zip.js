import fetch from "node-fetch";
import fs from 'fs';

export const getZip = (resolve, reject) => {
    fetch('http://www.cbr.ru/s/newbik')
        .then(res => {
            const dest = fs.createWriteStream('./files/data.zip');
            res.body.pipe(dest);
            resolve()
        })
        .catch(err => reject(err))
}