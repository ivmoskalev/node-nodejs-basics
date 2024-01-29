import { cp } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';


const copy = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourcePath = join(__dirname, 'files');
    const targetPath = join(__dirname, 'files_copy');

    try {
        await cp(sourcePath, targetPath, {recursive: true, errorOnExist: true, force: false});
        console.log('Files copied successfully');
    }
    catch {
        throw new Error('FS operation failed');
    }
};

await copy();
