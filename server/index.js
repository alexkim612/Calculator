const express = require('express');
const path = require('path');
const app = require('express')();
const http = require('http').Server(app);

const db = require('../db/index.js');

const PORT = 9000;
const io = require('socket.io')(http);

//serve files from dist
app.use(express.static(path.join(__dirname, '../client/dist')));

//socket connection
io.on('connection', (socket) => {
  console.log('a user connected');

  // recieve result
  socket.on('result', (result) => {
    //send out result to all users
    io.emit('result', result);
    console.log(result, typeof(result));

    //record in db
    db.query(`INSERT INTO calc (equation) VALUES ('${result}')`);
  });
});

//notification on open server
http.listen(PORT, () => console.log(`listening on port ${PORT}!`));

