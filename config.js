'use strict';

const dotenv = require('dotenv').config();

/**
 * Configurations
 */
module.exports = {

	env: env('NODE_ENV', 'development'),

	debug: env('DEBUG', false),

	port: env('PORT', 3000),

    // Only this API and the JWT Auth server know this secret
    // All JWT's created from Auth server are signed with this
    // super secret key
    jwtSecret: env('JWT_SECRET'),


    // LATER move to actual AUTH server API
    // in minutes
    jwtExpires: env('JWT_EXPIRE_MINUTES', 1),

}

/**
 * Get env variable from dotdev or use defaul if not found
 * @param  {string} key   dotdev or env key
 * @param  {string} defaultValue default value
 * @return {mixed}
 */
function env(key, defaultValue) {
	if (process.env[key]) {
		return process.env[key];
	} else {
		return defaultValue;
	}
}
