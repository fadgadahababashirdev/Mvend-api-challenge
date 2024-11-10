const express = require('express');
const {
  signup,
  getAllUsers,
  getSingleUser,
  updateTheUser,
  deleteTheUser,
} = require('../controllers/signup');
const { login } = require('../auth/login');
const authorization = require('../middleWares/authorization');
const {
  createArticle,
  gettingAllArticles,
  singleArticle,
  updateArticle,
  deleteArticle,
} = require('../controllers/article');
const router = express.Router();

// creating a user
router.post('/api/v1/createAccount', signup);
// getting all users
router.get('/api/v1/users', getAllUsers);
// getting single user
router.get('/api/v1/user/:id', getSingleUser);
// updating a user
router.put('/api/v1/user/:id', updateTheUser);
// delete user
router.delete('/api/v1/user/:id', deleteTheUser);

// login
router.post('/api/v1/user/login', login);

// creating an article
router.post('/api/v1/article', authorization, createArticle);
// getting all articles
router.get('/api/v1/article', authorization, gettingAllArticles);
// getting single article
router.get('/api/v1/article/:id', authorization, singleArticle);
// update article
router.put('/api/v1/article/:id', authorization, updateArticle);
// delete article
router.delete('/api/v1/article/:id', authorization, deleteArticle);

module.exports = router;
