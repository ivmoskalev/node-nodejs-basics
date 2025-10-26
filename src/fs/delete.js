import { unlink } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToRemove = join(__dirname, 'files', 'fileToRemove.txt');
 
    try {
        await unlink(fileToRemove);
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await remove();
