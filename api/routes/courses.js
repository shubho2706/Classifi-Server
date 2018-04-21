const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dotenv = require('dotenv').config();

var con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    database : process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  });


router.get('/',(req, res, next) => {

    con.connect(function(err) {
        if (err) {
            //console.log('ERROR');
            throw err;
        }
        console.log("Connected!");
      });

    res.status(200).json({
        message: 'Hit GET course'
    });
});

module.exports = router;