const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'calc'
});

connection.connect((err) => {
  if (err) console.log('error connection');

  console.log('connected to db');
});



