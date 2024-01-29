import { fork } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const cp = fork(join(__dirname, 'files', 'script.js'), args, { silent: true });

    process.stdin.pipe(cp.stdin);
    cp.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* ['someArgument1', 'someArgument2', 'someArgument3'] */);
