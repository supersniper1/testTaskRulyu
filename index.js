import {getZip} from './src/get.zip.js';

// если сделать таким образом то на первый запуск он не успевает скачивать архив,
// на второй запуск говорит что архив побитый и у него нету хедера,
// если сначала запустить код с фетчом и заугрзкой архива на локалку,
// потом код с разархиватором, то все выполнится успешно и мы получим xml файл,
// не успел найти решение чтобы все это выполнялось в один запуск.
// попробовал: промисы, try catch, таймаут.

getZip()
