const express = require('express');
const path = require('path');
const app = require('express')();
const http = require('http').Server(app);

const PORT = 9000;
const io = require('socket.io')(http);

//serve files from dist
app.use(express.static(path.join(__dirname, '../client/dist')));

//socket connection
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('result', (result) => {
    console.log(result);
  });
});

//notification on open server
http.listen(PORT, () => console.log(`listening on port ${PORT}!`));

