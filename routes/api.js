var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/safeforum');

// GET All Posts
router.get('/getposts', function (req, res, next) {
    db.posts.find(function (err, posts) {
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
        db.posts.save(post, function (err, result) {
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
    console.log(req.query);
    let verified = db.users.find(
        {userid: req.query.userid, password: req.query.password},
        function (err, result) {
            console.log(result);
            if (err || !result.length) {
                res.send(false);
            } else {
                res.send(true);
            }
        })
});

module.exports = router;