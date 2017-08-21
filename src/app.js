'use strict';

const Koa = require('koa');
const loadRoutes = require('routes');
const bodyParser = require('koa-bodyparser');
const responseTime = require('koa-response-time');

// New Koa app
let app = new Koa();

// Response time middleware (always first)
app.use(responseTime());

// Body Parser
app.use(bodyParser());

// Routes
// Performance Note:
// I tested loading routes as middleware like: app.use(routes(app));
// And inside routes.js I also loaded subroutes as middleware and apachebenchmark
// performance dropped exponentially to near 0.  So middleware is definitely NOT
// what you want for routes.  Just use regular module.exports
loadRoutes(app);

// Export Koa app
module.exports = app;
