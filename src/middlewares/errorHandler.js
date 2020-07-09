const errorHandler = (err, req, res, next) => {
  if (Object.keys(err).length > 0) {
    return res.status(400).send({ error: err.message })
  }
  return res.status(500).json({ message: "Erro interno, tente mais tarde!" });

}

module.exports = errorHandler;
