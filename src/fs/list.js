import { readdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const list = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filesDir = join(__dirname, 'files');
 
    try {
        const files = await readdir(filesDir);
        console.log(files);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await list();
