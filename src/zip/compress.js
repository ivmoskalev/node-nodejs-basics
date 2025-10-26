import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const compress = async () => {
    try {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
        const archive = join(__dirname, 'files', 'archive.gz');
    
        const gzip = createGzip();
        const source = createReadStream(fileToCompress);
        const destination = createWriteStream(archive);
    
        await pipeline(source, gzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
    }
};

await compress();
