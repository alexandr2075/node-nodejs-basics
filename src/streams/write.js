import { pipeline } from "node:stream/promises";
import fs from "node:fs";
import { stdin, stdout } from "node:process"

import path, { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const destFile = path.join(__dirname, 'files/fileToWrite.txt');


const write = async () => {

    stdout.write('Запишите что-нибудь в fileToWrite.txt...\n'),

    await pipeline(
        stdin,
        fs.createWriteStream(destFile),
      );
     
};

await write();

