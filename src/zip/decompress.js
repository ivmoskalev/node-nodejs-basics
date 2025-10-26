import { createGunzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const decompress = async () => {
    try {
        const __dirname = dirname(fileURLToPath(import.meta.url));
        const archive = join(__dirname, 'files', 'archive.gz');
        const fileToDecompress = join(__dirname, 'files', 'fileToCompress.txt');
    
        const gunzip = createGunzip();
        const source = createReadStream(archive);
        const destination = createWriteStream(fileToDecompress);
    
        await pipeline(source, gunzip, destination);
    } catch (err) {
        console.error('An error occurred:', err);
    }
};

await decompress();
