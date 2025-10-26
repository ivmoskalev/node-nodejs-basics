import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const filePath = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

    try {
        const hash = createHash('sha256');
        const input = createReadStream(filePath);

        await new Promise((resolve, reject) => {
            input.on('data', (chunk) => hash.update(chunk));
            input.on('end', () => resolve());
            input.on('error', (err) => reject(err));
        });

        console.log(hash.digest('hex'));
    } catch (error) {
        console.error('Failed to calculate hash:', error);
        process.exit(1);
    }
};

await calculateHash();
