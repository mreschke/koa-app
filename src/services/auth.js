'use strict';

const os = require('os');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const secured = require('middleware/jwt');

/**
 * Auth API
 * @license http://mreschke.com/license/mit
 * @author Matthew Reschke <mail@mreschke.com>
 */
module.exports = function(router)
{
    // Example: curl http://localhost:3000/jwt/token -H 'Content-Type: application/json' --data-binary '{ "username":"mreschke", "password":"techie" }'
    router.post('/jwt/token', function(ctx, next) {

        // Post data
        let username = ctx.request.body.username;
        let password = ctx.request.body.password;
        //let api = ctx.request.body.api; // requested API, to get proper permissions back just for one endpoint

        // Query user database and validate username/password
        if (password === 'techie') {

            // Custom JWT Payload (Claims)
            // See JWT reserved cliams https://www.iana.org/assignments/jwt/jwt.xhtml
            let claims = {
                // UserID
                uid: 179,
                role: 'admin'
                // etc... anything you want your API server to "know" without querying user database AGAIN (self-contained)
            };

            // Build JWT token with our custom claims and timeout
            let token = jwt.sign(
                claims,
                config.jwtSecret,
                {
                    expiresIn: config.jwtExpires * 60 // In Minutes
                }
            );
            console.log(config.jwtSecret);

            // Build response
            let response = {
                token: token,
                user: {
                    id: 179,
                    email: 'mail@mreschke.com',
                    firstName: 'Matthew',
                    lastName: 'Reschke'
                },
                groups: [
                    'Administrators',
                    'Users'
                ],
                message: "Successfully logged in!"
            };
            console.log("JWT LOGIN:", os.EOL, response);

            // Login success, respond 200
            ctx.type = 'application/json';
            ctx.body = response;
        } else {
            // Access Denied, invalid username/password, respond 401
            ctx.status = 401;
            ctx.type = 'application/json';
            ctx.body = {
                message: "Authentication failed"
            };
        }
        //return ctx;
    });

};
