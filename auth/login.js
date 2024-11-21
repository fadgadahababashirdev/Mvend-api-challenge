const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/models/users');
require('dotenv').config();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email: email } });
    if (!existingUser) {
      res
        .status(400)
        .json({status:'failed', message: 'user does not exist' });
    } else {
      const comparePassword = await bcrypt.compare(
        password,
        existingUser.password
      );
      if (!comparePassword) {
        res.status(400).json({ status: 'failed', message: 'Wrong password' });
      } else {
        res.status(200).json({
          status: 'success',
          message: 'user logged in successfully',
          token: jwt.sign({ id: existingUser.id }, process.env.APP_SECRET, {
            expiresIn: '24h',
          }),
        });
      }
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
module.exports = { login };
