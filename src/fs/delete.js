import { rm } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files/fileToRemove.txt');


const remove = async () => {
    try {
        await rm(pathToFile);
      } catch (err) {
        throw Error('FS operation failed');
      }
};

await remove();