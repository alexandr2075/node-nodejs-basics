const args = process.argv.slice(2);

console.log(`Total number of arguments is ${args.length}`);
console.log(`Arguments: ${JSON.stringify(args)}`);

const echoInput = (chunk) => {
    const chunkStringified = chunk.toString();
    if (chunkStringified.includes('CLOSE')) process.exit(0);
    process.on('message', (msg) => {
        console.log('Message from parent:', msg);
      });
    
    process.stdout.write(`Received from master process: ${chunk.toString()}\n`)
    
    process.send(`Send to master: ${chunk.toString()}`);
    process.exit();
};
process.stdout.write('Input something...\n'); 
process.stdin.on('data', echoInput);
