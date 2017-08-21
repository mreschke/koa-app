'use strict'

const jwt = require('koa-jwt');
const config = require('../../config');

module.exports = jwt({
  secret: config.jwtSecret
});
