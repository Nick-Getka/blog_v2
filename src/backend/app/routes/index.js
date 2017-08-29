var express = require('express');
var router = express.Router();
var blog_db = require('../queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/getAllPosts', blog_db.getAllPosts);
router.get('/api/getLatest', blog_db.getLatest);
router.get('/api/getPostByID/:id', blog_db.getPostByID);
router.get('/api/getPostByTitle/:title', blog_db.getPostByTitle);

module.exports = router;
