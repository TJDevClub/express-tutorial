var express = require('express');
var hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send('A message is sent.');
});

app.get('/web', (req, res) =>{
  info = {
    word: req.query.word
  };
  res.render('index', info);
});

app.get('/webOne', (req, res) =>{
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log('listening');
});
