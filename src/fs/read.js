import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const targetFilename = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const data = await readFile(targetFilename, 'utf-8');
        console.log(data);
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await read();