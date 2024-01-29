import { rm } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const currentFilename = join(__dirname, 'files', 'fileToRemove.txt');

    try {
        await rm(currentFilename, {errorOnExist: true});
        console.log('File deleted successfully');
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await remove();