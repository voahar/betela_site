/**
 * Created with IntelliJ IDEA.
 * User: voahar
 * Date: 16/08/13
 * Time: 13:21
 * To change this template use File | Settings | File Templates.
 */
var mongoskin = require('mongoskin');
var db = mongoskin.db('localhost:27017/beteladb', {safe:true});

// export models
exports.posts = new (require('./posts'))(db);

