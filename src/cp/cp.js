import { spawn } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const scriptPath = join(__dirname, 'files', 'script.js');

    const child = spawn('node', [scriptPath, ...args], { stdio: ['pipe', 'pipe', 'inherit'] });

    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

spawnChildProcess(['someArgument1', 'someArgument2']);
