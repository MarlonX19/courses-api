const express = require('express');
const Course = require('./controllers/CourseController');

const routes = express.Router();


routes.get('/courses', Course.index);
routes.post('/courses', Course.store);
//routes.post('/courses', Course.store)



module.exports = routes;
