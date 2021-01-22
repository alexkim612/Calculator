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

const getFirstFive = (callback) => {
  db.query(`SELECT * FROM calc ORDER BY id DESC LIMIT 5`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      callback(null, result);
    }
  });
}

module.exports = db;
module.exports = getFirstFive;