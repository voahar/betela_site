var models = require('../../models');

module.exports = function attachHandlers (router) {

    // get requests
    router.get('/post', listPosts);

    // post requests
    router.post('/post', createPost);

};

function listPosts (req, res) {

    models.posts.find({ }, function (err, documents) {
        console.log(documents);
        return res.json(documents);

    });
};

function createPost (req, res) {

    var content = req.params.content;
    var permalink = req.params.permalink;
    var category = req.params.category;
    var publicationDate = req.params.publicationDate;
    var author = req.params.author; //TODO get author id
    var title = req.params.title;
    var tags = req.params.tags; // array
    var comments_body = req.params.comment_body;
    var comments_email = req.params.comment_email;
    var comments_author = req.params.comment_author;

    var query = {"body": content, "permalink": permalink, "author": "admin","title": "Tonga Soa","tags": tags,
        "comments": [{"body": comments_body,"email": comments_email,"author": comments_author}]
    };
    models.posts.insert({}, function(err, result)) {

    }
    return res.send(201);

};