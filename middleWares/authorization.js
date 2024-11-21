const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorization = async (req, res, next) => {
  try {
    const availableToken = req.headers['authorization'];

    if (!availableToken) {
      return res.status(401).json({
        status: 'failed',
        message: 'Token not provided',
      });
    }

    const token = availableToken.replace('Bearer ', '');

    jwt.verify(token, process.env.APP_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({
          status: 'failed',
          message: 'Invalid token',
        });
      }

      req.user = decoded.id; 
      
      next();
    });
  } catch (error) {
    return res.status(500).json({
      status: 'failed',
      message: 'Authorization failed',
    });
  }
};
module.exports = authorization;
