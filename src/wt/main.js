import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
    const numCores = os.cpus().length;
    let workers = new Array(numCores);
    // let results = new Array(numCores);
    let startIndex = 10;
    const workerUrl = new URL('./worker.js', import.meta.url);

    const calculateFibonacci = (workerData) => new Promise((resolve) => {
        const worker = new Worker(workerUrl, { workerData });

        worker.on('message', (result) => resolve( { status: 'resolved', data: result } ));
        worker.on('error', () => resolve({ status: 'rejected', data: null }));
    });

    for (let i = 0; i < numCores; i++) {
        workers[i] = calculateFibonacci(startIndex + i);
    }
    const results = await Promise.all(workers);
    console.log(results);
};

await performCalculations();