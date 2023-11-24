const mongoose = require('mongoose');
const { Schema } = mongoose;

const menuSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: String,
    description: String,
    pcs: Number,
});

module.exports = mongoose.model('Menu', menuSchema);
