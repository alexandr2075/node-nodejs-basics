import { readFile } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files/fileToRead.txt');

const read = async () => {
    try {
        const contents = await readFile(pathToFile, { encoding: 'utf8' });
        console.log(contents);
      } catch (err) {
        throw Error('FS operation failed');
      } 
};

await read();