import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const oldFilename = join(__dirname, 'files', 'wrongFilename.txt');
    const newFilename = join(__dirname, 'files', 'properFilename.md');

    try {
        await fs.rename(oldFilename, newFilename, {errorOnExist: true, force: false});
        console.log('File renamed successfully');
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await rename();