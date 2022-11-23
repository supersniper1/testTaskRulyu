// import {fileURLToPath} from 'url';
// import path from 'path';
import admZip from "adm-zip";
import {getZip} from './src/get.zip.js';

const promise = new Promise(((resolve, reject) => {
    getZip()
}))

promise.then(() => {
    const zip = new admZip("./files/data.zip")
    zip.extractAllTo("./files/", true)
})
