const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');
const app = express();


app.use(cors());
app.use(express.json());

app.use(routes);


mongoose.connect('mongodb+srv://startse:startse@cluster0-atavq.mongodb.net/startse?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})



const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port: ', port));
