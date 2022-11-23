import admZip from "adm-zip";
import path from 'path';
import {fileURLToPath} from 'url';
import {getZip} from './src/get.zip.js';

getZip()

const zip = new admZip("./files/data.zip")
zip.extractAllTo("./files/", true)

