var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login.html');
});

router.get('/login', function (req, res, next) {
    res.render('login.html');
});

router.get('/posts', function (req, res, next) {
    res.render('posts.html');
});

module.exports = router;