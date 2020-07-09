const express = require('express');
const Course = require('./controllers/CourseController');

const routes = express.Router();


routes.get('/courses', Course.index);
routes.get('/courses/find', Course.findCourse);
routes.get('/courses/:id', Course.listCourse);



routes.post('/courses', Course.store);
routes.delete('/courses/:id', Course.delete);
routes.put('/courses/:id', Course.update);




module.exports = routes;
