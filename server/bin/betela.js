var server = require('../src/server').createServer();

server.listen(1313, function () {

    console.log('Accepting incoming requests: ' + server.settings.env);

});