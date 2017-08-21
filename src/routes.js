'use strict';

const Router = require('koa-router');

/**
 * Main Routes File
 * @license http://mreschke.com/license/mit
 * @author Matthew Reschke <mail@mreschke.com>
 */
module.exports = function(app)
{
    // New Koa router
    let router = new Router();

    // Home
    router.get('/', function(ctx, next) {
        ctx.body = {
            message: 'Home here!'
        };
    });

    // Ping
    router.get('/ping', function(ctx, next) {
        ctx.body = {
            message: 'Ping Success!',
            date: new Date(),
        };
    });


    // Register all API service routes
    // Tried these as middleware like so: app.use(require('services/auth')(router));
    // But apachebenchmark slowed exponentially.  I think middleware is loaded on each request?
    require('services/auth')(router);
    require('services/user')(router);


    // Add router to Koa
    app.use(router.routes());
    app.use(router.allowedMethods());
};
