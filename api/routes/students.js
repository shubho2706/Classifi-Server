const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET Student'
    });
});


router.post('/', (req, res, next) => {
    const student = {
        emailID : req.body.emailID,
        name : req.body.name
    };

    res.status(201).json({
        message: 'POST Student',
        createdStudent : student
    });
});


router.get('/:studentEmailId', (req, res, next) => {

    const id = req.params.studentEmailId;

    //Run Query to database
    if (id === 'special') {
        res.status(200).json({
            message: 'You have hit special id',
            id : id
        });
    } else {
        res.status(200).json({
            message : 'You requested for a student get'
        });
    }

});

router.patch('/:studentEmailId', (req, res, next) => {

    const id = req.params.studentEmailId;

    //Run Query to database
    if (id === 'special') {
        res.status(201).json({
            message: 'Student data updated',
            id : id
        });
    } else {
        res.status(200).json({
            message : 'You requested for a student data updation'
        });
    }

});


router.delete('/:studentEmailId', (req, res, next) => {

    const id = req.params.studentEmailId;

    //Run Query to database
    if (id === 'special') {
        res.status(200).json({
            message: 'Student data deleted',
            id : id
        });
    } else {
        res.status(200).json({
            message : 'You requested for a student deletion'
        });
    }

});


module.exports = router;

