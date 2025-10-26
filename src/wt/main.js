import { Worker } from 'node:worker_threads';
import { availableParallelism } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const performCalculations = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const workerPath = join(__dirname, 'worker.js');
    const numCores = availableParallelism();

    const workerPromises = Array.from({ length: numCores }, (_, i) => {
        return new Promise((resolve) => {
            const worker = new Worker(workerPath, { workerData: 10 + i });

            worker.on('message', (data) => {
                resolve({ status: 'resolved', data });
            });

            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            });

            worker.on('exit', (code) => {
                if (code !== 0) resolve({ status: 'error', data: null });
            });
        });
    });

    const finalResults = await Promise.all(workerPromises);
    console.log(finalResults);
};

await performCalculations();
