import { createReadStream, createWriteStream } from 'fs';
import { createGunzip } from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const srcFilename = join(__dirname, 'files', 'archive.gz');
    const dstFilename = join(__dirname, 'files', 'fileToCompress.txt');

    const source = createReadStream(srcFilename);
    const destination = createWriteStream(dstFilename);
    const gunzip = createGunzip();

    source.pipe(gunzip).pipe(destination);
};

await decompress();