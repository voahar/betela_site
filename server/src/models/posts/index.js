var logentries = require('node-logentries');
var log = logentries.logger({
    token:process.env.LOGENTRIES_TOKEN
});


var Post = module.exports = function (db) {

    this.posts = db.collection('posts');

};

Post.prototype.find = function (query, callback) {

    this.posts.find({},{"_id":0}).toArray(function(e, results){

        log.info(results);

        return callback(e, results);
    });

};

Post.prototype.insert = function (query, callback) {

    this.posts.find({},{"_id":0}).toArray(function(e, results){

        log.info(results);

        return callback(e, results);
    });

    this.posts.insert(query, function(err, result) {
        if (err) throw err;
        if (result) console.log('Post added!');

        return callback(err, result);
    });

};