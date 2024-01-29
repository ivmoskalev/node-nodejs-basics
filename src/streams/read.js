import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'fs';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const targetFilename = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const stream = createReadStream(targetFilename);
        stream.pipe(process.stdout);
    }
    catch (err) {
        console.log(err);

    }
};

await read();