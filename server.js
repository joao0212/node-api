const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o bd
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });

//Primeira rota
app.use('/api', require('./src/routes'));

app.listen('3001');