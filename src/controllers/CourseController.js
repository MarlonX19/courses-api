const Course = require('../models/courses');

module.exports = {

  async index(req, res) {
    try {
      const courses = await Course.find({});

      return res.json(courses);
    }
    catch (error) {
      return res.status(500).json({ message: "Erro interno, tente mais tarde!" });
    }

  },


  async listCourse(req, res) {
    const { id } = req.params;

    try {
      const courses = await Course.find({ _id: id });

      return res.json(courses);
    }
    catch (error) {
      return res.status(500).json({ message: "Erro interno buscar, tente mais tarde!!" });
    }

  },


  async findCourse(req, res) {
    const { q } = req.query;

    try {
      const courses = await Course.find({ 'title': new RegExp(q, 'i') });
      console.log(courses);

      if (courses.length > 0) {
        return res.json(courses);
      }

      return res.json({ message: 'Nenhum curso encontrado para sua busca' })


    }
    catch (error) {
      return res.status(500).json({ message: "Erro interno, tente mais tarde!!!" });
    }

  },



  async store(req, res) {
    const { title, subtitle, startedAt, description } = req.body;

    const courseExists = await Course.findOne({ title: title });

    if (courseExists) {
      return res.json(courseExists);
    }

    try {
      const crs = await Course.create({
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


  async delete(req, res) {
    const { id } = req.params;

    try {
      const course = await Course.find({ _id: id });

      if (course.length > 0) {
        const delCourse = await Course.deleteOne({ _id: id });

        return res.status(204);
      }

      return res.status(404).json({ message: 'Curso não encontrado, impossível deletar' });

    }
    catch (error) {
      return res.status(500).json({ message: "Erro interno ao tentar deletar curso, tente mais tarde!!" });
    }

  },


  async update(req, res) {
    const { id } = req.params;
    const { title, subtitle, startedAt, description } = req.body;

    try {
      const course = await Course.find({ _id: id });

      if (course.length > 0) {
        const upCourse = await Course.findOneAndUpdate({ _id: id }, { title, subtitle, startedAt, description });

        return res.status(200).json({ upCourse });
      }

      return res.status(404).json({ message: 'Curso não encontrado, impossível atualizar' });

    }
    catch (error) {
      return res.status(500).json({ message: "Erro interno ao tentar atualizar curso, tente mais tarde!!" });
    }


  }

}

