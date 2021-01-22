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

//insert query
const insert = (entry, callback) => {
  db.query(`INSERT INTO calc (equation) VALUES ('${entry}')`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      callback(null, result);
    }
  });
}

//get first five query
const getFirstFive = (cb) => {
  db.query(`SELECT * FROM calc ORDER BY id DESC LIMIT 5`, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      // console.log(result);
      cb(null, result);
    }
  });
}

module.exports.insert = insert;
module.exports.getFirstFive = getFirstFive;