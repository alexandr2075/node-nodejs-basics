import { exit, stdin, stdout } from "node:process"

const transform = async () => {

    stdout.write('Запишите что-нибудь в fileToWrite.txt...\n'),

    stdin.on("data", data => {
    data = data.toString().split('').reverse().join('')
    stdout.write(data + "\n")
    })
     
};

await transform();
