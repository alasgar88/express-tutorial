const express = require('express');
const { products } = require('./data');

const app = express();

app.get('/', (req, res) => {
  res.json(products);
});

app.all('*', (req, res) => {
  res.status(400).send('<h1>Page not found</h1>');
});

app.listen(5000, () => {
  console.log('server listening at port 5000');
});
