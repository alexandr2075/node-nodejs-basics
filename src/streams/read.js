import { pipeline } from "node:stream/promises";
import fs from "node:fs";
import { stdout } from "node:process"

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.join(__dirname, 'files/fileToRead.txt');


const read = async () => {
    await pipeline(
        fs.createReadStream(pathToFile),
        stdout
      );
};

await read();
