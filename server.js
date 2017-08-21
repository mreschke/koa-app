'use strict';

// Allow all require() to be relative to /src/ path (not base)
process.env.NODE_PATH = __dirname + '/src';
require('module').Module._initPaths();

const cluster = require('cluster');
const os = require('os');

let env = process.env.NODE_ENV;
if (env == 'production' && cluster.isMaster) {

    console.log('adsf');
    // Create a worker for each CPU
    let cpuCount = os.cpus().length;
    for (var i = 0; i < cpuCount; i += 1) {
        cluster.fork();
    }

    // Listen for dying workers
    cluster.on('exit', function (worker) {
        // Replace the dead worker,
        // we're not sentimental
        console.log('Worker %d died :(', worker.id);
        cluster.fork();
    });

} else {

    const app = require('app.js');
    const server = app.listen(3000);

    server.on('listening', () =>
        //console.log(`Koa application started on ${app.get('host')}:${port}`)
        console.log('Koa application started on 3000')
    );
}
