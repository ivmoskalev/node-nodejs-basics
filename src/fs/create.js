import { writeFile, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';


const create = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fresh.txt');
    try {
        await writeFile(filePath, 'I am fresh and young', {flag: 'wx'});
        console.log('File created successfully');
    } catch {
        throw new Error('FS operation failed');
    }
};

await create();