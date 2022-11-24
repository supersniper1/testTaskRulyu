import fs from 'fs';
import request from 'request';
import admZip from "adm-zip";

export const getZip = () => {
    const req = request(
        {
            method: 'GET',
            uri: 'http://www.cbr.ru/s/newbik'
        }
    );

    const dest = fs.createWriteStream('./files/data.zip');
    req.pipe(dest);
    req.on('end', () => {
        const zip = new admZip("./files/data.zip")
        zip.extractAllTo("./files/", true)
    })
}



// export const getZip = (resolve, reject) => {
//     fetch('http://www.cbr.ru/s/newbik')
//         .then(res => {
//             const dest = fs.createWriteStream('./files/data.zip');
//             res.body.pipe(dest);
//             resolve()
//         })
//         .catch(err => reject(err))
// }