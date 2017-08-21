'use strict';

const jwt = require('jsonwebtoken');
const secured = require('middleware/jwt');

/**
 * User API
 * @license http://mreschke.com/license/mit
 * @author Matthew Reschke <mail@mreschke.com>
 */
module.exports = function(router)
{
    // Example: curl -v http://localhost:3000/test -H 'Content-Type: application/json' -H 'Authorization: Bearer tokenhere'
    // Token Payload example: {"pub":179,"role":"admin","iat":1491652253,"exp":1491655853}
    router.get('/private', secured, function(ctx, next) {
        let token = ctx.header.authorization.split(' ')[1];
        //let decoded = jwt.verify(token, 'A very secret key');
        //token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE0OTE2NDE4OTcsImV4cCI6MTQ5MTY0NTQ5N30.uMgvLmksXJCMAUtWEfAwzivECACEtVIH5HvTAOofoZI';
        let decoded = jwt.decode(token);
        //console.log(decoded);

        ctx.body = decoded;
    });

};
