//ESTABLISH DEPENDENCIES  
const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = require("./db/connection");



//NODE JS DRIVER FOR SQL 
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '_____',
    database: 'employeedbtracker',
});


connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});



// var mysql      = require('mysql');
// var connection = mysql.createConnection(...);

// connection.query('SELECT 1', function (error, results, fields) {
//   if (error) throw error;
//   // connected!
// });

// connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
// });

// connection.end();


// //ESTABLISH CONNECTION 
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'example.org',
//     user: 'bob',
//     password: 'secret'
// });