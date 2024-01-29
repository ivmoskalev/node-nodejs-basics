import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const compress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const srcFilename = join(__dirname, 'files', 'fileToCompress.txt');
    const dstFilename = join(__dirname, 'files', 'archive.gz');

    const source = createReadStream(srcFilename);
    const destination = createWriteStream(dstFilename);
    const gzip = createGzip();

    source.pipe(gzip).pipe(destination);
};

await compress();