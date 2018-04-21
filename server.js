const http = require('http');
const app = require('./app');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3000;
const mysql = require('mysql');


// var env = process.env.NODE_ENV || 'development';
// var config = require('./config/config')[env];
//console.log(config);

// var env = process.env.NODE_ENV || 'development';
// var config = require('./config/config')[env];

var con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database : process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  });
  
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE_NAME);
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);

const server = http.createServer(app);

server.listen(port);