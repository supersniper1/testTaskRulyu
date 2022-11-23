import fetch from "node-fetch";
import admZip from "adm-zip";
import fs from 'fs';
import path from 'path';

const writeZip = (res) => {
    fs.writeFile('test.zip', res, err => {
        if (err) throw err
    })
}

fetch('http://www.cbr.ru/s/newbik')
.then(res => console.log(res))
.catch(err => console.log(err))