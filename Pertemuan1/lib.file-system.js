import {readFile, writeFile} from "fs/promises";

async function extratcFile() {
    try{
    const file = await readFile('data.txt', 'utf8');
    console.info(file);
}
catch(err){
    console.error('Error Membaca file');
}
}

async function writetoFile() {
    try{
    await writeFile ('output.txt', 'Hellow World Im here!');
    console.log('File berhasil ditulis')
    }
    catch(err){
        console.error("Gagal menulis");
    }
}
extratcFile();
writetoFile();