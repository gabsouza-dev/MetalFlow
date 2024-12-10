import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'metalurgia'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    process.exit(1);
  } else {
    console.log('Connected to the database');
  }
});

export default db;
