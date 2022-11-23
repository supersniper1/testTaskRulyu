import fetch from "node-fetch";
import fs from 'fs';

export const getZip = () => {
    fetch('http://www.cbr.ru/s/newbik')
        .then(res => {
            const dest = fs.createWriteStream('./files/data.zip');
            res.body.pipe(dest);
        })
        .catch(err => console.log(err))
}