const express = require('express');
const courceController = require('../controllers/courseController');

const router = express.Router();

router.route('/').post(courceController.createCourse); // http://localhost:3000/courses

module.exports = router;