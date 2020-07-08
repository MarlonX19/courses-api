const axios = require('axios');
const Course = require('../models/courses');

module.exports = {
  async store(req, res) {
    //const { title, subtitle } = req.body;

    // const courseExists = await Course.findOne({ title: title });

    // if (courseExists) {
    //   return res.json(courseExists);
    // }


    const crs = await Course.create({
      title: 'Node',
      subtitle: 'desenvolvimento backend, NodeJS',
      startedAt: '2020-07-08T19:33:49',
      description: 'Curso efetuado durante o mês de julho de 2020'
    })
    return res.json(crs);
  },


}

