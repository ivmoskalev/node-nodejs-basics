import { createReadStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fileToRead.txt');
    const readableStream = createReadStream(filePath);

    readableStream.pipe(process.stdout);
};

await read();
