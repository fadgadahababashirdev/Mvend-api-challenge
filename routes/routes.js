const express = require('express');
const { signup, getAllUsers, getSingleUser, updateTheUser, deleteTheUser } = require('../controllers/signup');
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
router.delete("/api/v1/user/:id" , deleteTheUser)

module.exports = router;
