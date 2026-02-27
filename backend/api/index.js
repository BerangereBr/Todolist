const app = require('./app');
const serverless = require('serverless-http');
const handler = serverless(app);

handler({ httpMethod: 'GET', path: '/health' }, {
    succeed: (response) => console.log(response)
});
module.exports = serverless(app);