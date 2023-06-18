import { env } from 'node:process';

const parseEnv = () => {
    Object.entries(env).forEach(([key, value]) => {
        if (key.includes('RSS')) {
            console.log(key + '=' + value);
        }
    })
    
};

parseEnv();