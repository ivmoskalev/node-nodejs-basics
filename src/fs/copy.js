import { cp } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const srcPath = join(__dirname, 'files');
    const destPath = join(__dirname, 'files_copy');

    try {
        await cp(srcPath, destPath, { recursive: true, errorOnExist: true });
    } catch (error) {
        if (error.code === 'ENOENT' || error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await copy();
