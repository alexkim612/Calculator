const express = require('express');
const path = require('path');
const app = express();
const PORT = 9000;

//serve files from dist
app.use(express.static(path.join(__dirname, '../client/dist')));

//notification on open server
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));