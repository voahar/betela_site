var express = require('express');
var routes = require('./routes');

exports.createServer = function createServer () {

    var server = express();

    // specify middleware
    server.use(express.bodyParser());

    var allowCrossDomain = function(req, res, next) {
        res.header('Access-Control-Allow-Origin', "*");
    };

    server.use(allowCrossDomain);

    // attach router handlers
    routes.attachHandlers(server);

    return server;

};