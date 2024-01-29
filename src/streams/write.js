import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createWriteStream } from 'fs';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const targetFilename = join(__dirname, 'files', 'fileToWrite.txt');

    try {
        const stream = createWriteStream(targetFilename);
        process.stdin.pipe(stream);
    }
    catch (err) {
        console.log(err);
    }
};

await write();