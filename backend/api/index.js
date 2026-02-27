const app = require('../app');
// const serverless = require('serverless-http');
module.exports = (req, res) => {
    res.status(200).json({ message: "API WORKS" });
};
// module.exports = serverless(app);