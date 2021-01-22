const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'calc'
});

db.connect((err) => {
  if (err) console.log('error connection');

  console.log('connected to db');
});

module.exports = db;