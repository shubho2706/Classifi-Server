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

router.post('/register',(req, res, next) =>{
    teacher = {
        emailID : req.body.emailID,
        address : req.body.address,
        phoneNumber : req.body.phoneNumber,
        name : req.body.name,
        dob : req.body.dob,
        dept : req.body.dept,
        gender : req.body.gender,
        lastUpdated : req.body.lastUpdated,
        passwordHash : req.body.passwordHash,
        account : req.body.account,
        collegeName : req.body.collegeName,
        yearOfJoining : req.body.yearOfJoining,
        jobDesignation : req.body.jobDesignation,
        pastJob : req.body.pastJob,
        maxQualification : req.body.maxQualification
    };

    res.status(201).json({
        message : 'Teacher Details updated',
        name : teacher
    });
});

router.get('/register', (req, res, next) => {
    res.status(200).json({
        message : 'All okay'
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

