var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login.html');
});

router.get('/login', function (req, res, next) {
    res.render('login.html');
});

router.get('/register', function (req, res, next) {
    res.render('register.html');
});

router.get('/posts', function (req, res, next) {
    res.render('posts.html');
});
router.get('/post1', function (req, res, next) {
    res.render('post1.html');
});
router.get('/post2', function (req, res, next) {
    res.render('post2.html');
});

module.exports = router;