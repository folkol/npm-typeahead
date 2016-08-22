/* jshint node: true */
var restify = require('restify');
var server = restify.createServer();
server.get('/hello', (req, res, cb) => {
    res.send('Hello, world!');
    return cb();
});
server.listen(process.env.PORT || 5000, () => {
    console.log('%s listening on port %s', server.name, server.url)
});