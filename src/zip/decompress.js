import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import {
  createReadStream,
  createWriteStream,
}  from 'node:fs';

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destinationPath = path.join(__dirname, 'files/fileToCompress.txt');
const srcPath = path.join(__dirname, 'files/archive.gz');

const gzip = createUnzip();
const source = createReadStream(srcPath);
const destination = createWriteStream(destinationPath);

const decompress = async () => {
    pipeline(source, gzip, destination, (err) => {
        if (err) {
          console.error('An error occurred:', err);
          process.exitCode = 1;
        }
      });
};

await decompress();