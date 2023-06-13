import { opendir } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToDir = path.join(__dirname, 'files');

const list = async () => {
    try {
        const dir = await opendir(pathToDir);
        const arr = [];
        for await (const dirent of dir) {
            arr.push(dirent.name)
        }
          console.log(arr);
      } catch (err) {
        throw Error('FS operation failed');
      } 
};

await list();