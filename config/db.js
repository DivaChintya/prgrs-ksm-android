//config/db.js
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/administrasirestoran';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = { mongoose }; 