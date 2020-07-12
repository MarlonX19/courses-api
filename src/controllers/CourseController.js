const Course = require('../models/courses');

module.exports = {

  async index(req, res, next) {
    try {
      const courses = await Course.find({});

      return res.json(courses);
    }
    catch (error) {
      next(error)
    }

  },


  async listCourse(req, res, next) {
    const { id } = req.params;

    try {
      const courses = await Course.find({ _id: id });

      return res.json(courses);
    }
    catch (error) {
      next(error)
    }

  },


  async findCourse(req, res, next) {
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
      next(error);
    }

  },



  async store(req, res, next) {
    const { title, subtitle, startedAt, description, isActive } = req.body;

    const courseExists = await Course.findOne({ title: title });

    if (courseExists) {
      return res.json(courseExists);
    }

    try {
      const crs = await Course.create({
        title,
        subtitle,
        isActive,
        startedAt,
        description
      })
      return res.json(crs);
    }
    catch (error) {
      next(error);
    }

  },


  async delete(req, res, next) {
    const { id } = req.params;

    try {
      const course = await Course.find({ _id: id });

      if (course.length > 0) {
        console.log('caiu aqui para apagar')
        const delCourse = await Course.deleteOne({ _id: id });

        return res.status(200).json({ message: 'curso apagado'});
      }

      return res.status(404).json({ message: 'Curso não encontrado, impossível deletar' });

    }
    catch (error) {
      next(error);
    }

  },


  async update(req, res, next) {
    const { id } = req.params;
    const { title, subtitle, startedAt, description, isActive } = req.body;

    try {
      const course = await Course.find({ _id: id });

      if (course.length > 0) {
        const upCourse = await Course.findOneAndUpdate({ _id: id }, { title, subtitle, startedAt, description, isActive }, { new: true });

        return res.status(200).json({ upCourse });
      }

      return res.status(404).json({ message: 'Curso não encontrado, impossível atualizar' });

    }
    catch (error) {
      next(error);
    }

  },


  async modify(req, res, next) {
    const { id } = req.params;

    try {
      const course = await Course.find({ _id: id });

      if (course.length > 0) {
        const upCourse = await Course.findOneAndUpdate({ _id: id }, req.body, { new: true });

        return res.status(200).json({ upCourse });
      }

      return res.status(404).json({ message: 'Curso não encontrado, impossível atualizar' });

    }
    catch (error) {
      next(error);
    }

  }

}

