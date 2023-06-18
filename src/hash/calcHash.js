import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createReadStream } from 'node:fs';
import { stdout } from 'node:process';
const { createHash } = await import('node:crypto');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files/fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const hash = createHash('sha256');
    const input = createReadStream(pathToFile);
    input.pipe(hash).setEncoding('hex').pipe(stdout);
};

await calculateHash();