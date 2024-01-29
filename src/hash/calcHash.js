import { createReadStream } from 'fs';
import { createHash } from 'crypto';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';


const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filename = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    return new Promise((resolve, reject) => {
        const hash = createHash('sha256');
        const stream = createReadStream(filename);

        stream.on('data', (chunk) => {
            hash.update(chunk)
        });

        stream.on('end', () => {
            const hexHash = hash.digest('hex');
            console.log(hexHash);
            resolve(hexHash);
        });

        stream.on('error', (err) => {
            reject(err)
        });
    })
};

await calculateHash();