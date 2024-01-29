import { readdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const targetDirname = join(__dirname, 'files');

    try {
        const files = await readdir(targetDirname);
        console.log(files);
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await list();