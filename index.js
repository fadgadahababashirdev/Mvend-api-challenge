const express = require('express');
const router = require('./routes/routes');
const app = express();
require('dotenv').config();
app.use(express.json());
// app route 
app.use("/" , router)
app.get('/', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', message: 'app running successfully' });
});
app.get('*', (req, res) => {
  res.status(400).json({ status: 'failed', message: 'route not found' });
});
app.listen(process.env.APP_PORT, () =>
  console.log(`app running on http://localhost:${process.env.APP_PORT}`)
);
