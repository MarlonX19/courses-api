const express = require('express');
const Course = require('./controllers/CourseController');

const routes = express.Router();


routes.get('/', Course.store)



module.exports = routes;
