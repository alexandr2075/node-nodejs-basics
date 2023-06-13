import { rename as rn } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const oldPath = path.join(__dirname, 'files/wrongFilename.txt');
const newPath = path.join(__dirname, 'files/properFilename.md');


const rename = async () => {
    try {
        await rn(oldPath, newPath);
      } catch (err) {
        throw Error('FS operation failed');
      }
};

await rename();