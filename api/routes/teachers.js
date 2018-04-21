const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET teacher'
    });
});


router.post('/', (req, res, next) => {

    const teacher = {
        emailID : req.body.emailID,
        name : req.body.name
    };

    res.status(201).json({
        message: 'POST teacher',
        createdTeacher : teacher
    });
});

//Taking parameters in GET request
router.get('/:teacherEmailId', (req, res, next) => {

    const id = req.params.teacherEmailId;

    //Run Query to database
    if (id === 'special') {
        res.status(200).json({
            message: 'You have hit special id',
            id : id
        });
    } else {
        res.status(200).json({
            message : 'You requested for a teacher get'
        });
    }

});

router.patch('/:teacherEmailId', (req, res, next) => {

    const id = req.params.teacherEmailId;

    //Run Query to database
    if (id === 'special') {
        res.status(201).json({
            message: 'teacher data updated',
            id : id
        });
    } else {
        res.status(200).json({
            message : 'You requested for a teacher data updation'
        });
    }

});


router.delete('/:teacherEmailId', (req, res, next) => {

    const id = req.params.teacherEmailId;

    //Run Query to database
    if (id === 'special') {
        res.status(200).json({
            message: 'teacher data deleted',
            id : id
        });
    } else {
        res.status(200).json({
            message : 'You requested for a teacher deletion'
        });
    }

});


module.exports = router;

