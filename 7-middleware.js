// Middleware are functions are executed during the request to the server.

const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware  => res

// 1. use vs route
// 2. options - our own / express / third party

// behind the scenes express will pass request object
// when you work with middleware you must  to pass it to next middleware

// app.get('/', logger, (req, res) => {
//   res.send('Home');
// });

// app.get('/about', logger, (req, res) => {
//   res.send('About');
// });

app.use('/api', [logger, authorize]);

// app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  console.log(req.user);
  res.send('Items');
});

app.listen(5000, () => {
  console.log('server listen at port 5000');
});
