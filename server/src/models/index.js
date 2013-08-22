/**
 * Created with IntelliJ IDEA.
 * User: voahar
 * Date: 16/08/13
 * Time: 13:21
 * To change this template use File | Settings | File Templates.
 */
var mongoskin = require('mongoskin');
//var db = mongoskin.db('localhost:27017/beteladb', {safe:true});
//var db = mongoskin.db('mongodb://af_betela-randria_voahar:ejenfga7koveej665frdo0nhma@ds039088.mongolab.com:39088/af_betela-randria_voahar', {safe:true});
//var db = mongoskin.db('mongodb://af_voahar:1178193@ds039088.mongolab.com:39088/af_betela-randria_voahar', {safe:true});
var db = mongoskin.db('af_voahar:1178193@ds039088.mongolab.com:39088/af_betela-randria_voahar', {safe:true});
//process.env.MONGOLAB_URI;
// export models
exports.posts = new (require('./posts'))(db);

