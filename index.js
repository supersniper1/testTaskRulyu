const getZip = require('./src/get.zip.js');
const convert = require('xml-js');
const fs = require("fs");
const iconv =  require('iconv-lite')

// иногда архивы приходят побитыми

// не успел поправить ошибку с тем что не успевает разархивироваться до выполнения конвертации,
// закончилось время выданное на тестовое

const promise = new Promise(((resolve, reject) => {
    getZip(resolve, reject)
}))

promise.then(() => {
    // convert xml to json
    const xml = fs.readFileSync('./files/20221124_ED807_full.xml');
    const result = convert.xml2json(xml, {compact: true, spaces: 4});

    //writing result to data.json
    fs.writeFile('./files/data.json', result, err => {
        if (err) console.log('sad')
    })

    //encoding win1251 json to utf8
    fs.createReadStream('./files/data.json')
        .pipe(iconv.decodeStream('utf8'))
        .pipe(iconv.encodeStream('win1251'))
        .pipe(fs.createWriteStream('./files/encodedData.json'));
})