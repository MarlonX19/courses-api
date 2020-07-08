const express = require('express');
const Course = require('./controllers/CourseController');

const routes = express.Router();


routes.get('/courses', Course.index);
routes.get('/courses/:id', Course.listCourse);


routes.post('/courses', Course.store);




module.exports = routes;
