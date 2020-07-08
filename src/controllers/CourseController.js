const axios = require('axios');
const Course = require('../models/courses');

module.exports = {
  async store(req, res) {
    const { title, subtitle, startedAt, description } = req.body;

    const courseExists = await Course.findOne({ title: title });

    if (courseExists) {
      return res.json(courseExists);
    }

    try {
      const crs = await Course.creates({
        title,
        subtitle,
        startedAt,
        description
      })
      return res.json(crs);
    }
    catch (error) {
      return res.status(500).json({ message: "Erro interno, tente mais tarde!" });
    }

  },


  async index(req, res) {
    try {
      const courses = await Course.find({});

      return res.json(courses);
    }
    catch (error) {
      return res.status(500).json({ message: "Erro interno, tente mais tarde!" });
    }

  }


}

