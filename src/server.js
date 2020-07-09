const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());

app.use(routes);
app.use(function (err, req, res, next) {
  if (Object.keys(err).length > 0) {
    return res.status(400).send({ error: err.message })
  }
  return res.status(500).json({ message: "Erro interno, tente mais tarde!" });

})


mongoose.connect('mongodb+srv://startse:startse@cluster0-atavq.mongodb.net/startse?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})



const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port: ', port));
