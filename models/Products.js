const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    url: { type: String, required: true },
    title: { type: String, required: true },
    size: { type: String, required: true } // Include size if you want to store it
});

// Create the Product model
const Product = mongoose.model('Product', productSchema, 'products');

module.exports = Product;
