var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('safeforum');

// GET All Posts
router.get('/getposts', function (req, res, next) {
    var posts = db.collection('posts');
    posts.find(function (err, posts) {
        if (err) {
            res.send(err);
        } else {
            res.json(posts);
        }
    });
});

// POST Save a Post
router.post('/post', function (req, res, next) {
    var post = req.body;
    if (post.isPost != "true") {
        res.status(400);
        res.json({
            "error": "Invalid Data"
        });
    } else {
        var posts = db.collection('posts');
        posts.save(post, function (err, result) {
            if (err) {
                res.send(err);
            } else {
                res.json(result);
            }
        })
    }
});

//Verify a user
router.get('/verify', function (req, res, next) {
    var users = db.collection('users');
    users.find(
        {userId: req.query.userId, password: req.query.password},
        function (err, result) {
            if (err || !result.length) {
                res.send(false);
            } else {
                res.send(true);
            }
        })
});

//Add a user
router.post('/addUser', function (req, res, next) {
    var users = db.collection('users');
    users.save(
        req.body,
        function (err, result) {
            console.log(result);
            if (err || !result) {
                res.send(false);
            } else {
                res.send(true);
            }
        })
});

module.exports = router;