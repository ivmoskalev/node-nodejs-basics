import { rename as renameFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const wrongFile = join(__dirname, 'files', 'wrongFilename.txt');
    const properFile = join(__dirname, 'files', 'properFilename.md');

    try {
        await renameFile(wrongFile, properFile);
    } catch (error) {
        if (error.code === 'ENOENT' || error.code === 'EEXIST') {
            throw new Error('FS operation failed');
        }
        throw error;
    }
};

await rename();
