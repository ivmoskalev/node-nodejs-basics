import { Transform } from 'stream';

const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, _, callback) {
            const reversedChunk = chunk.toString().split('').reverse().join('');
            callback(null, reversedChunk);
        }
    })

    process.stdin.pipe(transformStream).pipe(process.stdout);

    return new Promise((resolve, reject) => {
        transformStream.on('finish', () => {
            resolve();
        });
        transformStream.on('error', (err) => {
            reject(err);
        });
    })
};

await transform();