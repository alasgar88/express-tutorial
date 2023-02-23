const express = require('express');
const path = require('path');

app = express();

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendfile(path.resolve(__dirname, './navbar-app/index.html'));
// });

// adding index.html to static assets
// SSR

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5000, () => {
  console.log('server is listeing on port 5000');
});
