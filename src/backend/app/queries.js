var promise = require('bluebird');
const options = {
  promiseLib: promise
};
const pgpro = require('pg-promise')(options);
var connection = {
  host: process.env.POSTGRES_URL||'0.0.0.0',
  port: process.env.POSTGRES_PORT||5432,
  user: process.env.POSTGRES_USER||'postgres',
  database: process.env.POSTGRES_USER||'postgres',
  password: process.env.POSTGRES_PASSWORD||'practice1234'
};

var blog_db = pgpro(connection);

function getAllPosts(req, res, next){
  blog_db.any('SELECT * FROM posts;')
  .then(function (data) {
    res.status(200)
    .json(data);
  })
  .catch(function (err) {
    return next(err);
  });
}

function getLatest(req, res, next){
  blog_db.one('SELECT * FROM posts LIMIT 1;')
  .then(function (data) {
    res.status(200)
    .json(data);
  })
  .catch(function (err) {
    return next(err);
  });
}

function getPostByID(req, res, next){
  var postID = parseInt(req.params.id);
  blog_db.one('SELECT * FROM posts WHERE post_id = $1;', postID)
  .then(function (data) {
    res.status(200)
    .json(data);
  })
  .catch(function (err) {
    return next(err);
  });
}

function getPostByTitle(req, res, next){
  var postTitle = req.params.title;
  console.log(postTitle)
  blog_db.one('SELECT * FROM posts WHERE post_title = $1;', postTitle)
  .then(function (data) {
    res.status(200)
    .json(data);
  })
  .catch(function (err) {
    return next(err);
  });
}



module.exports = {
  getAllPosts: getAllPosts,
  getLatest: getLatest,
  getPostByID: getPostByID,
  getPostByTitle: getPostByTitle
};
