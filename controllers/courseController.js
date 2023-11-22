const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    const courses = await Course.create(req.body);

    try {
        res.status(201).json({
            ststus: 'success',
            course
        })
    } catch {
        res.status(400).json({
            ststus: 'fail',
            error
        })
    }
}