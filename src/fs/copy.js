import { cp } from 'node:fs/promises';
import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const srcDir = path.join(__dirname, 'files');
const destinationDir = path.join(__dirname, 'files_copy');

const copy = async () => {
    
    try {
        await cp(srcDir, destinationDir, {errorOnExist: true, recursive: true, force: false});
      } catch (err) {
        throw Error('FS operation failed');
      }
};

await copy();
