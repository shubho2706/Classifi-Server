const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');




const studentRoute = require('./api/routes/students');
const teacherRouter = require('./api/routes/teachers');
const courseRouter = require('./api/routes/courses');

//morgan maintains logs
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// app.use((req, res, next) =>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorizarion');
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods','PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }

// });

app.use('/students', studentRoute);

app.use('/teachers', teacherRouter);

app.use('/courses', courseRouter);

// app.use(function(req, res, next){
//     res.status(200).json({
//         message : 'It works'
//     });
// });


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error : {
            message : error.message
        }
    });
});
module.exports = app;