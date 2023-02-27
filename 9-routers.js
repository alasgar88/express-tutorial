const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const auth = require('./routes/auth');
// static assets
app.use(express.static('./methods-public'));
// parse form data ( add values to req.body)
app.use(express.urlencoded({ extended: false }));
// handling incoming json data
app.use(express.json());

app.use('/api/people', peopleRouter);

app.use('/login', auth);

app.listen(5000, () => {
  console.log('server listen at port 5000');
});
