import { createWriteStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fileToWrite.txt');
    const writableStream = createWriteStream(filePath);

    process.stdin.pipe(writableStream);
};

await write();
