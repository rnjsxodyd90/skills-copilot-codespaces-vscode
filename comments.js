// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const commentRouter = require('./routes/commentRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// Mount commentRouter to /comments route
app.use('/comments', commentRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
