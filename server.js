//server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();

const url = 'mongodb://127.0.0.1:27017/administrasirestoran';
mongoose.connect(url);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const menuRoutes = require('./routes/menuRoutes');

const app = express();
app.use(bodyParser.json());
const PORT = 3002;

app.use(express.json());

app.use('/api', menuRoutes);

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
