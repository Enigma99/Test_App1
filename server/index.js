// Using express
const express = require('express');
const app = express();

 app.use(express.static('client'));
app.set('view engine', 'ejs');

import serverRender from './render'

app.get('/', (req, res) => {
  res.render('index', {
    content: serverRender()
  });
})

app.listen(8080, () => {
  console.log("Server is running...")
});

// using HTML
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer();
//
// server.on('request', (req, res) => {
//   res.end(fs.readFileSync(__dirname + '/../client/index.html'));
//
// });
// server.listen(8080);
